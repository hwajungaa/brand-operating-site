/* ═══════════════════════════════════════
   SPA Hash Router (Robust & Fail-safe)
   ═══════════════════════════════════════ */

const routes = {};
let currentRoute = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigateTo(path) {
  window.location.hash = '#' + path;
}

export function getCurrentPath() {
  const hash = window.location.hash.slice(1);
  return (hash.startsWith('/') ? hash : '/' + hash) || '/';
}

export function startRouter(onRouteChange) {
  async function handleRoute() {
    const path = getCurrentPath();
    currentRoute = path;

    const handler = routes[path] || routes['/'];
    const content = document.getElementById('content');
    if (content && handler) {
      try {
        content.style.opacity = '1';
        await handler(content);
      } catch (err) {
        console.error('Error rendering route:', err);
      } finally {
        content.style.opacity = '1';
      }
    }
    if (onRouteChange) onRouteChange(path);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
