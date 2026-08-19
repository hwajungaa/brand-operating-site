/* ═══════════════════════════════════════
   Brand Strategy Page
   ═══════════════════════════════════════ */
import { getBrand, loadBrand } from '../utils/brand.js';

export async function renderStrategyPage(container) {
  let brand = getBrand();
  if (!brand) {
    brand = await loadBrand('sample-brand');
  }
  if (!brand) {
    container.innerHTML = '<div style="padding:40px; text-align:center; color:#999;">브랜드 데이터를 불러오는 중입니다... 잠시 후 새로고침 해주세요.</div>';
    return;
  }

  const s = brand.strategy;

  // Build personality spectrum bars
  let spectrumHtml = '';
  s.personality?.spectrum?.forEach(sp => {
    spectrumHtml += `
      <div class="spectrum-row">
        <span class="spectrum-label">${sp.axis}</span>
        <div class="spectrum-bar">
          <div class="spectrum-dot" style="left: ${sp.position}%"></div>
        </div>
      </div>`;
  });

  // Build design principles
  let principlesHtml = '';
  s.designPrinciples?.items?.forEach(p => {
    principlesHtml += `
      <div class="principle-card">
        <div class="principle-header">
          <div class="principle-name">${p.name}</div>
          <div class="principle-desc">${p.description}</div>
        </div>
        <div class="principle-examples">
          <div class="do-dont-grid">
            <div class="do-card">
              <div class="dd-label">✓ DO</div>
              <div class="dd-item">${p.doExample}</div>
            </div>
            <div class="dont-card">
              <div class="dd-label">✕ DON'T</div>
              <div class="dd-item">${p.dontExample}</div>
            </div>
          </div>
        </div>
      </div>`;
  });

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Brand Strategy</div>
      <h1>브랜드 전략 계층</h1>
      <p class="page-desc">브랜드의 존재 이유부터 실제 적용까지, 연결되는 전략 구조입니다.</p>
    </div>

    <!-- Strategy Flow Diagram -->
    <div class="strategy-flow">
      <div class="strategy-level" style="background: #000; color: #fff;">
        <div class="level-label">Brand Purpose</div>
        <div class="level-title">${s.purpose?.content || ''}</div>
        <div class="level-desc">${s.purpose?.mission || ''}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #222; color: #fff;">
        <div class="level-label">Brand Personality</div>
        <div class="level-title">${s.personality?.keywords?.join(' · ') || ''}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #444; color: #fff;">
        <div class="level-label">Brand Principles</div>
        <div class="level-title">${s.principles?.main || ''}</div>
        <div class="level-desc">${s.principles?.description || ''}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #F5F5F5; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Design Principles</div>
        <div class="level-title" style="color: #000;">${s.designPrinciples?.items?.map(i => i.name).join(' · ') || ''}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #FAFAFA; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Design System</div>
        <div class="level-title" style="color: #000;">Typography · Layout · Color · Photography</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #fff; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Application</div>
        <div class="level-title" style="color: #000;">SNS · Package · Digital · Offline</div>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Brand Purpose Detail -->
    <div class="section-subtitle">◎ Brand Purpose</div>
    <div class="card-grid cols-3" style="margin-bottom: 32px;">
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">MISSION</div>
        <div style="font-size:14px; font-weight:600; line-height:1.6;">${s.purpose?.mission || ''}</div>
      </div>
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">VISION</div>
        <div style="font-size:14px; font-weight:600; line-height:1.6;">${s.purpose?.vision || ''}</div>
      </div>
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">CORE VALUES</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
          ${(s.purpose?.values || []).map(v => `<span class="tag tag-gold">${v}</span>`).join('')}
        </div>
      </div>
    </div>

    <!-- Personality Spectrum -->
    <div class="section-subtitle">◎ Brand Personality</div>
    <div class="card" style="margin-bottom: 32px;">
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px;">
        ${(s.personality?.keywords || []).map(k => `<span class="tag tag-primary" style="font-size:12px; padding:5px 14px;">${k}</span>`).join('')}
      </div>
      ${spectrumHtml}
    </div>

    <!-- Brand Principles -->
    <div class="section-subtitle">◎ Brand Principles</div>
    <div class="card" style="margin-bottom: 32px; text-align: center; padding: 32px;">
      <div style="font-size:12px; color:var(--secondary); font-weight:700; letter-spacing:2px; margin-bottom:8px;">CORE PRINCIPLE</div>
      <div style="font-size:28px; font-weight:800; color:var(--text);">${s.principles?.main || ''}</div>
      <div style="font-size:14px; color:var(--text-secondary); margin-top:8px;">${s.principles?.description || ''}</div>
      <div style="display:flex; gap:12px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
        ${(s.principles?.subPrinciples || []).map(p => `<span class="tag tag-gold" style="font-size:11px; padding:6px 14px;">${p}</span>`).join('')}
      </div>
    </div>

    <!-- Design Principles -->
    <div class="section-subtitle">◎ Design Principles</div>
    <div class="card-grid" style="grid-template-columns: 1fr; gap: 16px;">
      ${principlesHtml}
    </div>
  `;
}
