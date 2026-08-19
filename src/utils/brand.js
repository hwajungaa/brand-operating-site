/* ═══════════════════════════════════════
   Brand Data Manager (Bulletproof Multi-path Loader)
   ═══════════════════════════════════════ */

let currentBrand = null;
let brandList = [];

export async function loadBrand(brandId = 'sample-brand') {
  if (currentBrand && currentBrand.brandId === brandId) {
    return currentBrand;
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const candidatePaths = [
    `${base}/brands/${brandId}/brand.json`,
    `./brands/${brandId}/brand.json`,
    `brands/${brandId}/brand.json`,
    `/brands/${brandId}/brand.json`
  ];

  for (const path of candidatePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        currentBrand = await res.json();
        applyTheme(currentBrand.theme);
        return currentBrand;
      }
    } catch (e) {
      // try next path candidate
    }
  }

  console.error(`Failed to load brand "${brandId}" from all paths`);
  return null;
}

export function getBrand() {
  return currentBrand;
}

export async function getBrandList() {
  if (brandList.length) return brandList;
  
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const candidatePaths = [
    `${base}/brands/brands-index.json`,
    `./brands/brands-index.json`,
    `brands/brands-index.json`,
    `/brands/brands-index.json`
  ];

  for (const path of candidatePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        brandList = await res.json();
        return brandList;
      }
    } catch (e) {
      // try next
    }
  }

  brandList = [{ id: 'sample-brand', name: 'Amore Creatives', nameKo: '아모레 크리에이티브' }];
  return brandList;
}

function applyTheme(theme) {
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
