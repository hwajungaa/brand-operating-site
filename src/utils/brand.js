/* ═══════════════════════════════════════
   Brand Data Manager (100% Synchronous Instant Loading)
   ═══════════════════════════════════════ */
import { DEFAULT_BRAND } from '../data/defaultBrand.js';

let currentBrand = DEFAULT_BRAND;
let brandList = [{ id: 'sample-brand', name: 'Amore Creatives', nameKo: '아모레 크리에이티브' }];

export function getBrand() {
  return currentBrand || DEFAULT_BRAND;
}

export function loadBrand(brandId = 'sample-brand') {
  currentBrand = DEFAULT_BRAND;
  applyTheme(currentBrand.theme);
  return currentBrand;
}

export function getBrandList() {
  return brandList;
}

export function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primaryColor || '#000000');
  root.style.setProperty('--secondary', theme.secondaryColor || '#000000');
  root.style.setProperty('--accent', theme.accentColor || '#000000');
  root.style.setProperty('--bg', theme.backgroundColor || '#FFFFFF');
  root.style.setProperty('--surface', theme.surfaceColor || '#FFFFFF');
  root.style.setProperty('--text', theme.textColor || '#000000');
  root.style.setProperty('--text-secondary', theme.textSecondary || '#666666');
  root.style.setProperty('--border', theme.borderColor || '#E8E8E8');
  if (theme.fontHeading) root.style.setProperty('--font-heading', theme.fontHeading);
  if (theme.fontBody) root.style.setProperty('--font-body', theme.fontBody);
}

// Apply theme immediately on module load
applyTheme(DEFAULT_BRAND.theme);
