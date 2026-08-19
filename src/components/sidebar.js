/* ═══════════════════════════════════════
   Sidebar Component
   ═══════════════════════════════════════ */
import { getBrand } from '../utils/brand.js';
import { getCurrentPath } from '../utils/router.js';

const NAV_ITEMS = [
  { section: 'Foundation', items: [
    { path: '/', icon: '◎', label: 'Brand Strategy' },
    { path: '/assets', icon: '◆', label: 'Asset Library' },
  ]},
  { section: 'Interactive Guide', items: [
    { path: '/colors', icon: '●', label: 'Color System' },
    { path: '/typography', icon: 'Aa', label: 'Typography' },
    { path: '/voice-tone', icon: '✦', label: 'Voice & Tone' },
  ]},
  { section: 'Governance', items: [
    { path: '/versions', icon: '⟳', label: 'Version History' },
  ]}
];

export function renderSidebar(container) {
  const brand = getBrand();
  const currentPath = getCurrentPath();

  let navHtml = '';
  NAV_ITEMS.forEach(section => {
    navHtml += `<div class="sidebar-section-label">${section.section}</div>`;
    section.items.forEach(item => {
      const active = item.path === currentPath ? ' active' : '';
      navHtml += `
        <a href="#${item.path}" class="sidebar-link${active}" data-path="${item.path}">
          <span class="nav-icon">${item.icon}</span>
          <span>${item.label}</span>
        </a>`;
    });
  });

  const latestVersion = brand?.versions?.[0];

  container.innerHTML = `
    <div class="sidebar-brand">
      <div class="brand-name">${brand?.brandName || 'Brand'}</div>
      <div class="brand-subtitle">Brand Operating Site</div>
    </div>
    <nav class="sidebar-nav">
      ${navHtml}
    </nav>
    <div class="sidebar-version">
      ${latestVersion ? `<span class="version-tag">${latestVersion.version}</span> ${latestVersion.date}` : ''}
    </div>
  `;
}

export function updateSidebarActive() {
  const currentPath = getCurrentPath();
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.toggle('active', link.dataset.path === currentPath);
  });
}
