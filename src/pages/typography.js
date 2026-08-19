/* ═══════════════════════════════════════
   Typography Page (Interactive)
   ═══════════════════════════════════════ */
import { getBrand } from '../utils/brand.js';
import { copyToClipboard } from '../utils/helpers.js';

export function renderTypographyPage(container) {
  const brand = getBrand();
  if (!brand) return;

  const { typography } = brand;

  // Font info cards
  function renderFontCard(key, font) {
    return `
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); letter-spacing:1px; margin-bottom:8px;">${key.toUpperCase()}</div>
        <div style="font-size:20px; font-weight:700; margin-bottom:4px;">${font.fontFamily}</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">${font.usage}</div>
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:12px;">
          ${font.weights.map(w => `<span class="tag tag-primary">${w}</span>`).join('')}
        </div>
        ${font.purchaseUrl ? `
          <a href="${font.purchaseUrl}" target="_blank" class="btn btn-sm btn-outline" style="text-decoration:none;">
            🔗 폰트 구매/다운로드
          </a>
        ` : ''}
        <div style="font-size:10px; color:var(--text-muted); margin-top:8px;">License: ${font.license || 'N/A'}</div>
      </div>
    `;
  }

  // Type scale items
  let scaleHtml = typography.scale?.map(s => `
    <div class="type-preview-card" style="margin-bottom:12px;">
      <div class="type-preview-header">
        <span class="type-name">${s.name}</span>
        <span class="type-specs">${s.size} / ${s.weight} / ${s.lineHeight}</span>
      </div>
      <div class="type-preview-body">
        <div id="preview-${s.name.replace(/\s/g, '-')}" style="font-size:${s.size}; font-weight:${s.weight}; line-height:${s.lineHeight}; letter-spacing:${s.letterSpacing}; transition: font-size 0.2s;">
          ${brand.brandName} 가나다라 ABCDEFG 0123456789
        </div>
      </div>
    </div>
  `).join('') || '';

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>타이포그래피</h1>
      <p class="page-desc">브랜드 공식 폰트와 타입 스케일을 확인하고, 직접 입력해 미리봅니다.</p>
    </div>

    <!-- Font Family Cards -->
    <div class="section-subtitle">✏️ 브랜드 서체</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${renderFontCard('heading', typography.heading || {})}
      ${renderFontCard('body', typography.body || {})}
      ${renderFontCard('english', typography.english || {})}
    </div>

    <div class="section-divider"></div>

    <!-- Interactive Type Scale -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <div class="section-subtitle" style="margin-bottom:0;">📏 Type Scale</div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:11px; color:var(--text-muted);">전체 크기 조절</span>
        <input type="range" class="range-slider" id="type-global-slider" min="50" max="200" value="100" style="width:160px;" />
        <span id="type-global-value" style="font-family:var(--font-heading); font-size:12px; font-weight:700; min-width:36px;">100%</span>
      </div>
    </div>

    <div id="type-scale-list">
      ${scaleHtml}
    </div>

    <div class="section-divider"></div>

    <!-- Live Preview -->
    <div class="section-subtitle">⌨️ 라이브 미리보기</div>
    <div class="card">
      <div style="display:flex; gap:16px; margin-bottom:16px; flex-wrap:wrap;">
        <select id="live-font" style="padding:6px 12px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="${typography.heading?.fontFamily}">${typography.heading?.fontFamily} (Heading)</option>
          <option value="${typography.body?.fontFamily}">${typography.body?.fontFamily} (Body)</option>
          <option value="${typography.english?.fontFamily}">${typography.english?.fontFamily} (English)</option>
        </select>
        <select id="live-weight" style="padding:6px 12px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="400">Regular (400)</option>
          <option value="500">Medium (500)</option>
          <option value="600">SemiBold (600)</option>
          <option value="700" selected>Bold (700)</option>
          <option value="800">ExtraBold (800)</option>
        </select>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="range" class="range-slider" id="live-size" min="10" max="72" value="24" style="width:120px;" />
          <span id="live-size-value" style="font-family:var(--font-heading); font-size:12px; min-width:40px;">24px</span>
        </div>
      </div>
      <textarea id="live-textarea" style="width:100%; border:1px solid var(--border); border-radius:var(--radius-md); padding:20px; font-size:24px; font-weight:700; min-height:120px; resize:vertical; outline:none; transition: all 0.2s;" placeholder="여기에 텍스트를 입력하세요...">${brand.brandName} — 시간이 지나도 변하지 않는 본질적인 아름다움</textarea>
      <div style="margin-top:8px; display:flex; gap:8px; justify-content:flex-end;">
        <button class="copy-btn" id="copy-font-css">CSS 복사</button>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Font Pairing Guide -->
    <div class="section-subtitle">🔗 폰트 페어링 가이드</div>
    <div class="card-grid cols-2">
      <div class="card" style="text-align:center; padding:32px;">
        <div style="font-family:${typography.heading?.fontFamily}; font-size:28px; font-weight:800; margin-bottom:8px;">Heading Style</div>
        <div style="font-family:${typography.body?.fontFamily}; font-size:14px; color:var(--text-secondary); line-height:1.7;">
          본문 텍스트는 가독성을 최우선으로 합니다. 적절한 행간과 자간으로 읽기 편한 환경을 만듭니다.
        </div>
        <div style="margin-top:16px;">
          <span class="tag tag-gold">${typography.heading?.fontFamily} + ${typography.body?.fontFamily}</span>
        </div>
      </div>
      <div class="card" style="text-align:center; padding:32px;">
        <div style="font-family:${typography.english?.fontFamily}; font-size:28px; font-weight:800; margin-bottom:8px;">English Heading</div>
        <div style="font-family:${typography.body?.fontFamily}; font-size:14px; color:var(--text-secondary); line-height:1.7;">
          영문 제목에는 전용 서체를 사용하여 국제적인 톤을 유지합니다. 숫자와 데이터 표현에도 활용됩니다.
        </div>
        <div style="margin-top:16px;">
          <span class="tag tag-gold">${typography.english?.fontFamily} + ${typography.body?.fontFamily}</span>
        </div>
      </div>
    </div>
  `;

  setupGlobalSlider(typography);
  setupLivePreview(typography);
}

function setupGlobalSlider(typography) {
  const slider = document.getElementById('type-global-slider');
  const valueLabel = document.getElementById('type-global-value');
  if (!slider) return;

  slider.addEventListener('input', () => {
    const scale = slider.value / 100;
    valueLabel.textContent = slider.value + '%';

    typography.scale?.forEach(s => {
      const el = document.getElementById(`preview-${s.name.replace(/\s/g, '-')}`);
      if (el) {
        const baseSize = parseFloat(s.size);
        el.style.fontSize = (baseSize * scale) + 'px';
      }
    });
  });
}

function setupLivePreview(typography) {
  const textarea = document.getElementById('live-textarea');
  const fontSelect = document.getElementById('live-font');
  const weightSelect = document.getElementById('live-weight');
  const sizeSlider = document.getElementById('live-size');
  const sizeLabel = document.getElementById('live-size-value');
  const copyBtn = document.getElementById('copy-font-css');

  if (!textarea) return;

  function update() {
    textarea.style.fontFamily = fontSelect.value;
    textarea.style.fontWeight = weightSelect.value;
    textarea.style.fontSize = sizeSlider.value + 'px';
    sizeLabel.textContent = sizeSlider.value + 'px';
  }

  fontSelect?.addEventListener('change', update);
  weightSelect?.addEventListener('change', update);
  sizeSlider?.addEventListener('input', update);

  copyBtn?.addEventListener('click', () => {
    const css = `font-family: '${fontSelect.value}'; font-size: ${sizeSlider.value}px; font-weight: ${weightSelect.value};`;
    copyToClipboard(css);
  });
}
