/* ═══════════════════════════════════════
   Brand Data Manager
   ═══════════════════════════════════════ */

let currentBrand = null;
let brandList = [];

export async function loadBrand(brandId) {
  try {
    const res = await fetch(`/brands/${brandId}/brand.json`);
    if (!res.ok) throw new Error(`Brand "${brandId}" not found`);
    currentBrand = await res.json();
    applyTheme(currentBrand.theme);
    return currentBrand;
  } catch (e) {
    console.error('Failed to load brand:', e);
    return null;
  }
}

export function getBrand() {
  return currentBrand;
}

export async function getBrandList() {
  if (brandList.length) return brandList;
  try {
    const res = await fetch('/brands/brands-index.json');
    if (res.ok) {
      brandList = await res.json();
    } else {
      brandList = [{ id: 'sample-brand', name: 'LUXE', nameKo: '럭스' }];
    }
  } catch {
    brandList = [{ id: 'sample-brand', name: 'LUXE', nameKo: '럭스' }];
  }
  return brandList;
}

function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primaryColor);
  root.style.setProperty('--secondary', theme.secondaryColor);
  root.style.setProperty('--accent', theme.accentColor || theme.secondaryColor);
  root.style.setProperty('--bg', theme.backgroundColor);
  root.style.setProperty('--surface', theme.surfaceColor);
  root.style.setProperty('--text', theme.textColor);
  root.style.setProperty('--text-secondary', theme.textSecondary);
  root.style.setProperty('--border', theme.borderColor);
  if (theme.fontHeading) root.style.setProperty('--font-heading', theme.fontHeading);
  if (theme.fontBody) root.style.setProperty('--font-body', theme.fontBody);
}
