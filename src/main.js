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

function init() {
  // Load brand synchronously (0ms)
  loadBrand('sample-brand');

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

  // Start router immediately
  startRouter((path) => {
    updateSidebarActive();
    renderHeader(document.getElementById('header'));
  });

  const content = document.getElementById('content');
  if (content) {
    content.style.opacity = '1';
  }
}

// Execute immediately
init();
