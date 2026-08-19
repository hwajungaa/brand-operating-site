/* ═══════════════════════════════════════
   Color System Page (Interactive)
   ═══════════════════════════════════════ */
import { getBrand, loadBrand } from '../utils/brand.js';
import { copyToClipboard, getContrastRatio, getWcagLevel } from '../utils/helpers.js';

export async function renderColorPage(container) {
  let brand = getBrand();
  if (!brand) brand = await loadBrand('sample-brand');
  if (!brand) return;

  const { colors } = brand;

  function renderSwatchGroup(groupName, groupColors) {
    return groupColors.map(c => `
      <div class="color-swatch" data-hex="${c.hex}" data-name="${c.name}">
        <div class="swatch-color" style="background: ${c.hex};"></div>
        <div class="swatch-info">
          <div class="swatch-name">${c.name}</div>
          <div class="swatch-hex">${c.hex}</div>
          ${c.rgb ? `<div style="font-family:var(--font-heading); font-size:10px; color:var(--text-muted); margin-top:2px;">RGB ${c.rgb}</div>` : ''}
          ${c.cmyk ? `<div style="font-family:var(--font-heading); font-size:10px; color:var(--text-muted);">CMYK ${c.cmyk}</div>` : ''}
          <div class="swatch-usage">${c.usage || ''}</div>
          <div style="display:flex; gap:4px; margin-top:8px;">
            <button class="copy-btn" data-copy="${c.hex}">HEX</button>
            ${c.rgb ? `<button class="copy-btn" data-copy="rgb(${c.rgb})">RGB</button>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Build WCAG combo grid
  const allColors = [...(colors.primary || []), ...(colors.secondary || [])];
  let wcagRows = '';
  for (let i = 0; i < allColors.length; i++) {
    for (let j = i + 1; j < allColors.length; j++) {
      const c1 = allColors[i];
      const c2 = allColors[j];
      const ratio = getContrastRatio(c1.hex, c2.hex);
      const wcag = getWcagLevel(ratio);
      wcagRows += `
        <div style="display:flex; align-items:center; gap:12px; padding:8px 0; border-bottom:1px solid var(--border-light);">
          <div style="width:24px; height:24px; border-radius:4px; background:${c1.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${c1.name}</span>
          <span style="font-size:11px; color:var(--text-muted);">×</span>
          <div style="width:24px; height:24px; border-radius:4px; background:${c2.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${c2.name}</span>
          <span style="font-family:var(--font-heading); font-size:12px; font-weight:700; min-width:40px;">${ratio}:1</span>
          <span class="wcag-badge ${wcag.pass ? 'wcag-pass' : 'wcag-fail'}">${wcag.level}</span>
        </div>`;
    }
  }

  // Build color ratio bar
  const ratio = colors.ratio || { primary: 60, secondary: 30, accent: 10 };

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>컬러 시스템</h1>
      <p class="page-desc">브랜드 공식 컬러를 확인하고 복사합니다. 접근성(WCAG) 대비 검사도 제공합니다.</p>
    </div>

    <!-- Color Ratio Bar -->
    <div class="card" style="margin-bottom:24px; padding:20px;">
      <div style="font-size:12px; font-weight:700; margin-bottom:10px;">사용 비율 가이드</div>
      <div style="display:flex; height:16px; border-radius:8px; overflow:hidden;">
        <div style="width:${ratio.primary}%; background:var(--primary);"></div>
        <div style="width:${ratio.secondary}%; background:var(--secondary);"></div>
        <div style="width:${ratio.accent}%; background:var(--accent);"></div>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-muted); margin-top:6px;">
        <span>Primary ${ratio.primary}%</span>
        <span>Secondary ${ratio.secondary}%</span>
        <span>Accent ${ratio.accent}%</span>
      </div>
    </div>

    <!-- Primary Colors -->
    <div class="section-subtitle">● Primary Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${renderSwatchGroup('primary', colors.primary || [])}
    </div>

    <!-- Secondary Colors -->
    <div class="section-subtitle">● Secondary Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${renderSwatchGroup('secondary', colors.secondary || [])}
    </div>

    <!-- Functional Colors -->
    <div class="section-subtitle">● Functional Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${renderSwatchGroup('functional', colors.functional || [])}
    </div>

    <div class="section-divider"></div>

    <!-- WCAG Accessibility Checker -->
    <div class="section-subtitle">♿ 접근성 대비 검사 (WCAG)</div>
    <div class="card-grid cols-2">
      <div class="card">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">컬러 대비 조합표</div>
        ${wcagRows}
      </div>
      <div class="a11y-checker">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">커스텀 대비 검사</div>
        <div class="a11y-selectors">
          <select id="a11y-fg">
            ${allColors.map((c, i) => `<option value="${c.hex}" ${i === 0 ? 'selected' : ''}>${c.name} (${c.hex})</option>`).join('')}
          </select>
          <select id="a11y-bg">
            ${allColors.map((c, i) => `<option value="${c.hex}" ${i === allColors.length - 1 ? 'selected' : ''}>${c.name} (${c.hex})</option>`).join('')}
          </select>
        </div>
        <div id="a11y-preview" class="a11y-preview">
          Sample Text 가나다라
        </div>
        <div id="a11y-result" style="text-align:center; margin-top:8px;">
        </div>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Gradient Generator -->
    <div class="section-subtitle">🌈 그라디언트 생성기</div>
    <div class="card" id="gradient-section">
      <div style="display:flex; gap:12px; margin-bottom:16px; align-items:center;">
        <select id="grad-color1" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          ${allColors.map((c, i) => `<option value="${c.hex}" ${i === 0 ? 'selected' : ''}>${c.name}</option>`).join('')}
        </select>
        <span style="font-size:11px; color:var(--text-muted);">→</span>
        <select id="grad-color2" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          ${allColors.map((c, i) => `<option value="${c.hex}" ${i === 1 ? 'selected' : ''}>${c.name}</option>`).join('')}
        </select>
        <select id="grad-angle" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="90">90°</option>
          <option value="135" selected>135°</option>
          <option value="180">180°</option>
          <option value="45">45°</option>
        </select>
      </div>
      <div id="grad-preview" style="height:80px; border-radius:var(--radius-md);"></div>
      <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
        <code id="grad-css" style="font-size:11px; color:var(--text-secondary);"></code>
        <button class="copy-btn" id="grad-copy-btn">CSS 복사</button>
      </div>
    </div>
  `;

  // Setup copy buttons
  container.querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard(btn.dataset.copy);
    });
  });

  // Setup swatch click to copy hex
  container.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      copyToClipboard(swatch.dataset.hex);
    });
  });

  // Setup A11y checker
  setupA11yChecker();
  // Setup gradient
  setupGradient();
}

function setupA11yChecker() {
  const fg = document.getElementById('a11y-fg');
  const bg = document.getElementById('a11y-bg');
  const preview = document.getElementById('a11y-preview');
  const result = document.getElementById('a11y-result');
  if (!fg || !bg) return;

  function update() {
    preview.style.color = fg.value;
    preview.style.background = bg.value;
    const ratio = getContrastRatio(fg.value, bg.value);
    const wcag = getWcagLevel(ratio);
    result.innerHTML = `
      <span style="font-family:var(--font-heading); font-size:20px; font-weight:800;">${ratio}:1</span>
      <span class="wcag-badge ${wcag.pass ? 'wcag-pass' : 'wcag-fail'}" style="margin-left:8px;">${wcag.level}</span>
    `;
  }

  fg.addEventListener('change', update);
  bg.addEventListener('change', update);
  update();
}

function setupGradient() {
  const c1 = document.getElementById('grad-color1');
  const c2 = document.getElementById('grad-color2');
  const angle = document.getElementById('grad-angle');
  const preview = document.getElementById('grad-preview');
  const css = document.getElementById('grad-css');
  const copyBtn = document.getElementById('grad-copy-btn');
  if (!c1 || !c2) return;

  function update() {
    const gradient = `linear-gradient(${angle.value}deg, ${c1.value} 0%, ${c2.value} 100%)`;
    preview.style.background = gradient;
    css.textContent = gradient;
  }

  c1.addEventListener('change', update);
  c2.addEventListener('change', update);
  angle.addEventListener('change', update);
  update();

  copyBtn?.addEventListener('click', () => {
    copyToClipboard(css.textContent);
  });
}
