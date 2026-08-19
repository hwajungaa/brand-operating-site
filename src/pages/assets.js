/* ═══════════════════════════════════════
   Asset Library Page
   ═══════════════════════════════════════ */
import { getBrand } from '../utils/brand.js';
import { showToast } from '../utils/helpers.js';

export function renderAssetPage(container) {
  const brand = getBrand();
  if (!brand) { container.innerHTML = '<p>로딩 중...</p>'; return; }

  const categories = brand.assets?.categories || [];
  let totalAssets = categories.reduce((sum, c) => sum + c.count, 0);

  let cardsHtml = categories.map(cat => `
    <div class="asset-category-card" data-cat-id="${cat.id}" ${cat.externalLink ? 'data-external="true"' : ''}>
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-count">${cat.externalLink ? '외부 링크' : cat.count + '개 에셋'}</div>
      <div class="cat-formats">
        ${cat.formats.map(f => `<span class="format-tag">${f}</span>`).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Asset Library</div>
      <h1>에셋 라이브러리</h1>
      <p class="page-desc">총 ${categories.length}개 카테고리 · ${totalAssets}개 에셋을 포맷별로 탐색하고 다운로드합니다.</p>
    </div>

    <!-- Stats -->
    <div style="display:flex; gap:12px; margin-bottom:28px;">
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${categories.length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">카테고리</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${totalAssets}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">전체 에셋</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${new Set(categories.flatMap(c => c.formats)).size}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">포맷 종류</div>
      </div>
    </div>

    <!-- Category Grid -->
    <div class="section-subtitle">📂 에셋 카테고리</div>
    <div class="asset-category-grid" id="asset-grid">
      ${cardsHtml}
    </div>

    <!-- Detail Panel (hidden by default) -->
    <div id="asset-detail" style="display:none; margin-top:32px;"></div>

    <div class="section-divider"></div>

    <!-- Interactive Logo Resize -->
    <div class="section-subtitle">🔍 로고/심볼 인터랙티브 프리뷰</div>
    <div class="card" style="margin-bottom:24px;">
      <div style="display:flex; gap:24px; align-items:flex-start;">
        <div style="flex:1;">
          <div style="font-size:12px; font-weight:600; margin-bottom:8px;">로고 크기 조절</div>
          <input type="range" class="range-slider" id="logo-size-slider" min="40" max="300" value="120" />
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-muted); margin-top:4px;">
            <span>40px</span>
            <span id="logo-size-value">120px</span>
            <span>300px</span>
          </div>
          <div style="margin-top:16px;">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">배경 미리보기</div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#FFFFFF">밝은 배경</button>
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#1B2838">어두운 배경</button>
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#F9F6F2">크림 배경</button>
            </div>
          </div>
        </div>
        <div id="logo-preview-area" style="flex:1; display:flex; align-items:center; justify-content:center; min-height:200px; background:#fff; border:1px solid var(--border); border-radius:var(--radius-md); position:relative;">
          <div id="logo-preview" style="font-family:var(--font-heading); font-size:48px; font-weight:900; color:var(--primary); letter-spacing:-1px; transition: font-size 0.2s;">${brand.brandName || 'LOGO'}</div>
          <div id="logo-margin-indicator" style="position:absolute; border:1px dashed var(--secondary); opacity:0.4; pointer-events:none; transition: all 0.2s;"></div>
        </div>
      </div>
    </div>
  `;

  setupLogoResize(brand);
  setupAssetCards(brand);
}

function setupLogoResize(brand) {
  const slider = document.getElementById('logo-size-slider');
  const preview = document.getElementById('logo-preview');
  const sizeLabel = document.getElementById('logo-size-value');
  const marginIndicator = document.getElementById('logo-margin-indicator');
  const previewArea = document.getElementById('logo-preview-area');

  if (!slider || !preview) return;

  const minMargin = brand.checkerRules?.logoMinMarginPx || 20;

  slider.addEventListener('input', () => {
    const size = slider.value;
    preview.style.fontSize = size * 0.4 + 'px';
    sizeLabel.textContent = size + 'px';

    // Show margin guide
    const rect = preview.getBoundingClientRect();
    const areaRect = previewArea.getBoundingClientRect();
    marginIndicator.style.width = (rect.width + minMargin * 2) + 'px';
    marginIndicator.style.height = (rect.height + minMargin * 2) + 'px';
    marginIndicator.style.left = (rect.left - areaRect.left - minMargin) + 'px';
    marginIndicator.style.top = (rect.top - areaRect.top - minMargin) + 'px';
  });

  document.querySelectorAll('.bg-preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      previewArea.style.background = btn.dataset.bg;
      const isDark = btn.dataset.bg === '#1B2838';
      preview.style.color = isDark ? '#FFFFFF' : 'var(--primary)';
    });
  });
}

function setupAssetCards(brand) {
  document.querySelectorAll('.asset-category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.dataset.catId;
      const cat = brand.assets?.categories?.find(c => c.id === catId);
      if (!cat) return;

      if (cat.externalLink) {
        showToast(`${cat.name}: 유료 폰트 구매 페이지로 이동합니다.`);
        return;
      }

      const detail = document.getElementById('asset-detail');
      detail.style.display = 'block';
      detail.innerHTML = `
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span style="font-size:24px; margin-right:8px;">${cat.icon}</span>
              <span style="font-size:18px; font-weight:700;">${cat.name}</span>
              <span class="tag tag-gold" style="margin-left:8px;">${cat.count}개</span>
            </div>
            <button class="btn btn-sm btn-outline" onclick="document.getElementById('asset-detail').style.display='none'">✕ 닫기</button>
          </div>
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">
            에셋 파일을 <code>brands/${brand.brandId}/assets/${catId}/</code> 폴더에 넣으면 이 카테고리에 자동으로 표시됩니다.
          </p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${cat.formats.map(f => `
              <button class="btn btn-sm btn-secondary" onclick="alert('${f} 포맷 다운로드 — 실제 에셋 파일이 업로드되면 활성화됩니다.')">
                ⬇ ${f}
              </button>
            `).join('')}
          </div>
        </div>
      `;
      detail.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
