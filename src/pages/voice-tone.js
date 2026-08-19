/* ═══════════════════════════════════════
   Voice & Tone Page
   ═══════════════════════════════════════ */
import { getBrand } from '../utils/brand.js';

export function renderVoiceTonePage(container) {
  const brand = getBrand();
  if (!brand) return;

  const vt = brand.voiceTone;

  // DO examples
  const doExamples = (vt?.tone?.examples?.do || []).map(ex => `<div class="dd-item">• ${ex}</div>`).join('');
  const dontExamples = (vt?.tone?.examples?.dont || []).map(ex => `<div class="dd-item">• ${ex}</div>`).join('');

  // Glossary
  let glossaryRows = (vt?.glossary || []).map(g => `
    <tr>
      <td style="font-weight:700;">${g.term}</td>
      <td><span style="color:var(--success); font-weight:600;">✓ ${g.correct}</span></td>
      <td><span style="color:var(--error); font-weight:600;">✕ ${g.incorrect}</span></td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>Voice & Tone</h1>
      <p class="page-desc">브랜드의 말투와 어조, 올바른 표기법을 확인합니다.</p>
    </div>

    <!-- Tone Overview -->
    <div class="card" style="margin-bottom:24px; text-align:center; padding:32px;">
      <div style="font-size:12px; font-weight:700; color:var(--secondary); letter-spacing:2px; margin-bottom:8px;">BRAND VOICE</div>
      <div style="font-size:22px; font-weight:800; color:var(--text); margin-bottom:12px;">"${vt?.tone?.description || ''}"</div>
      <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
        ${(vt?.tone?.keywords || []).map(k => `<span class="tag tag-gold" style="font-size:12px; padding:5px 14px;">${k}</span>`).join('')}
      </div>
    </div>

    <!-- DO / DON'T -->
    <div class="section-subtitle">✦ 톤 DO / DON'T</div>
    <div class="do-dont-grid" style="margin-bottom:28px;">
      <div class="do-card">
        <div class="dd-label">✓ DO — 이런 표현을 사용합니다</div>
        ${doExamples}
      </div>
      <div class="dont-card">
        <div class="dd-label">✕ DON'T — 이런 표현은 피합니다</div>
        ${dontExamples}
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Glossary -->
    <div class="section-subtitle">📖 용어 사전 (표기 규칙)</div>
    <div class="card">
      <table class="glossary-table">
        <thead>
          <tr>
            <th style="width:25%;">용어</th>
            <th style="width:37.5%;">올바른 표기</th>
            <th style="width:37.5%;">잘못된 표기</th>
          </tr>
        </thead>
        <tbody>
          ${glossaryRows}
        </tbody>
      </table>
    </div>
  `;
}
