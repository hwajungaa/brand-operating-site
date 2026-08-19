/* ═══════════════════════════════════════
   Brand Operating Site — Main Entry
   ═══════════════════════════════════════ */
import { loadBrand } from './utils/brand.js';
import { registerRoute, startRouter } from './utils/router.js';
import { renderSidebar, updateSidebarActive } from './components/sidebar.js';
import { renderHeader } from './components/header.js';
import { renderStrategyPage } from './pages/strategy.js';
import { renderAssetPage } from './pages/assets.js';
import { renderColorPage } from './pages/colors.js';
import { renderTypographyPage } from './pages/typography.js';
import { renderVoiceTonePage } from './pages/voice-tone.js';
import { renderVersionPage } from './pages/versions.js';

async function init() {
  // Load default brand
  await loadBrand('sample-brand');

  // Render shell
  renderSidebar(document.getElementById('sidebar'));
  renderHeader(document.getElementById('header'));

  // Register routes
  registerRoute('/', (el) => renderStrategyPage(el));
  registerRoute('/assets', (el) => renderAssetPage(el));
  registerRoute('/colors', (el) => renderColorPage(el));
  registerRoute('/typography', (el) => renderTypographyPage(el));
  registerRoute('/voice-tone', (el) => renderVoiceTonePage(el));
  registerRoute('/versions', (el) => renderVersionPage(el));

  // Start router
  startRouter((path) => {
    updateSidebarActive();
    renderHeader(document.getElementById('header'));
  });

  // Add content transition style
  const content = document.getElementById('content');
  if (content) {
    content.style.transition = 'opacity 0.12s ease';
  }
}

init();
