/* ═══════════════════════════════════════
   Header Component (Mobile Responsive)
   ═══════════════════════════════════════ */
import { getBrand, getBrandList, loadBrand } from '../utils/brand.js';
import { renderSidebar } from './sidebar.js';
import { getCurrentPath } from '../utils/router.js';

const PAGE_TITLES = {
  '/': 'Brand Strategy',
  '/assets': 'Asset Library',
  '/colors': 'Color System',
  '/typography': 'Typography',
  '/voice-tone': 'Voice & Tone',
  '/versions': 'Version History'
};

export function renderHeader(container) {
  const brand = getBrand();
  const currentPath = getCurrentPath();
  const pageTitle = PAGE_TITLES[currentPath] || 'Brand Operating Site';

  container.innerHTML = `
    <div class="header-left">
      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="메뉴 열기">
        <span>☰</span>
      </button>
      <span class="header-title">${pageTitle}</span>
      <span class="header-breadcrumb">${brand?.brandName || ''} › ${pageTitle}</span>
    </div>
    <div class="header-right">
      <div class="search-box" id="global-search">
        <span>🔍</span>
        <input type="text" placeholder="가이드, 에셋, 컬러 검색..." id="search-input" />
      </div>
      <button class="brand-switcher" id="brand-switcher-btn">
        <span>◆</span>
        <span>${brand?.brandName || 'Brand'}</span>
        <span style="font-size:10px;">▼</span>
      </button>
    </div>
  `;

  setupMobileMenu();
  setupSearch();
  setupBrandSwitcher();
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('sidebar-open');
    if (overlay) overlay.classList.toggle('active');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('sidebar-open');
      overlay.classList.remove('active');
    });
  }
}

function setupSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = input.value.trim().toLowerCase();
      if (!query) return;

      const brand = getBrand();
      const results = searchBrandData(brand, query);
      showSearchResults(results, query);
    }
  });
}

function searchBrandData(brand, query) {
  if (!brand) return [];
  const results = [];

  ['primary', 'secondary', 'functional'].forEach(group => {
    brand.colors?.[group]?.forEach(color => {
      if (color.name.toLowerCase().includes(query) ||
          color.hex.toLowerCase().includes(query) ||
          color.usage?.toLowerCase().includes(query)) {
        results.push({ type: 'color', label: `${color.name} (${color.hex})`, link: '#/colors', detail: color.usage });
      }
    });
  });

  brand.assets?.categories?.forEach(cat => {
    if (cat.name.toLowerCase().includes(query) || cat.id.toLowerCase().includes(query)) {
      results.push({ type: 'asset', label: cat.name, link: '#/assets', detail: cat.formats.join(', ') });
    }
  });

  ['heading', 'body', 'english'].forEach(key => {
    const t = brand.typography?.[key];
    if (t && t.fontFamily.toLowerCase().includes(query)) {
      results.push({ type: 'typography', label: t.fontFamily, link: '#/typography', detail: t.usage });
    }
  });

  const strat = brand.strategy;
  if (strat) {
    if (strat.principles?.main?.toLowerCase().includes(query)) {
      results.push({ type: 'strategy', label: strat.principles.main, link: '#/', detail: 'Brand Principle' });
    }
    strat.designPrinciples?.items?.forEach(p => {
      if (p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) {
        results.push({ type: 'strategy', label: p.name, link: '#/', detail: p.description });
      }
    });
  }

  return results;
}

function showSearchResults(results, query) {
  const existing = document.getElementById('search-dropdown');
  if (existing) existing.remove();

  const searchBox = document.getElementById('global-search');
  if (!searchBox) return;

  const dropdown = document.createElement('div');
  dropdown.id = 'search-dropdown';
  dropdown.style.cssText = `
    position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px;
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg); z-index: 100; max-height: 300px; overflow-y: auto;
  `;

  if (results.length === 0) {
    dropdown.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
      "${query}"에 대한 검색 결과가 없습니다.</div>`;
  } else {
    dropdown.innerHTML = results.map(r => `
      <a href="${r.link}" style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--border-light); text-decoration: none; color: var(--text); transition: background 0.15s;"
         onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        <span class="tag tag-${r.type === 'color' ? 'gold' : r.type === 'asset' ? 'primary' : 'green'}" style="font-size:9px;">${r.type.toUpperCase()}</span>
        <span style="font-size: 13px; font-weight: 600;">${r.label}</span>
        <span style="font-size: 11px; color: var(--text-muted); margin-left: auto;">${r.detail || ''}</span>
      </a>
    `).join('');
  }

  searchBox.style.position = 'relative';
  searchBox.appendChild(dropdown);

  setTimeout(() => {
    document.addEventListener('click', function close(e) {
      if (!searchBox.contains(e.target)) {
        dropdown.remove();
        document.removeEventListener('click', close);
      }
    });
  }, 10);
}

function setupBrandSwitcher() {
  const btn = document.getElementById('brand-switcher-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const brands = getBrandList();
    const existing = document.getElementById('brand-dropdown');
    if (existing) { existing.remove(); return; }

    const dropdown = document.createElement('div');
    dropdown.id = 'brand-dropdown';
    dropdown.style.cssText = `
      position: absolute; top: 100%; right: 0; margin-top: 4px;
      background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg); z-index: 100; min-width: 180px;
    `;

    dropdown.innerHTML = brands.map(b => `
      <div class="brand-option" data-brand-id="${b.id}" style="padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: background 0.15s;"
           onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        ${b.name} <span style="font-size:11px; color: var(--text-muted);">${b.nameKo || ''}</span>
      </div>
    `).join('');

    btn.style.position = 'relative';
    btn.appendChild(dropdown);

    dropdown.querySelectorAll('.brand-option').forEach(opt => {
      opt.addEventListener('click', () => {
        loadBrand(opt.dataset.brandId);
        renderSidebar(document.getElementById('sidebar'));
        renderHeader(document.getElementById('header'));
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        dropdown.remove();
      });
    });

    setTimeout(() => {
      document.addEventListener('click', function close(e) {
        if (!btn.contains(e.target)) {
          dropdown.remove();
          document.removeEventListener('click', close);
        }
      });
    }, 10);
  });
}
