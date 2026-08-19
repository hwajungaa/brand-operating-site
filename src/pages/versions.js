/* ═══════════════════════════════════════
   Version History Page
   ═══════════════════════════════════════ */
import { getBrand, loadBrand } from '../utils/brand.js';

export async function renderVersionPage(container) {
  let brand = getBrand();
  if (!brand) brand = await loadBrand('sample-brand');
  if (!brand) return;

  const versions = brand.versions || [];
  const latest = versions[0];

  let timelineHtml = versions.map(v => `
    <div class="version-item ${v.type || 'minor'}">
      <div class="version-header">
        <span class="version-tag">${v.version}</span>
        <span class="tag ${v.type === 'major' ? 'tag-gold' : 'tag-primary'}">${v.type === 'major' ? 'Major' : 'Minor'}</span>
        <span class="version-date">${v.date}</span>
      </div>
      <div class="version-summary">${v.summary}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Governance</div>
      <h1>버전 히스토리</h1>
      <p class="page-desc">가이드라인의 변경 이력을 타임라인으로 관리합니다.</p>
    </div>

    <!-- Current Version Banner -->
    ${latest ? `
      <div class="card" style="margin-bottom:28px; padding:28px; display:flex; align-items:center; justify-content:space-between; background: #000; color:#fff; border:none;">
        <div>
          <div style="font-size:11px; font-weight:700; opacity:0.6; letter-spacing:2px; margin-bottom:4px;">CURRENT VERSION</div>
          <div style="font-family:var(--font-heading); font-size:32px; font-weight:800;">${latest.version}</div>
          <div style="font-size:13px; opacity:0.8; margin-top:4px;">${latest.summary}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px; opacity:0.6;">Updated</div>
          <div style="font-size:16px; font-weight:700;">${latest.date}</div>
        </div>
      </div>
    ` : ''}

    <!-- Stats -->
    <div style="display:flex; gap:12px; margin-bottom:28px;">
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${versions.length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">전체 버전</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${versions.filter(v => v.type === 'major').length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Major 릴리즈</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${versions.filter(v => v.type === 'minor').length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Minor 업데이트</div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="section-subtitle">⟳ 변경 이력</div>
    <div class="version-timeline">
      ${timelineHtml}
    </div>
  `;
}
