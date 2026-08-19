/* ═══════════════════════════════════════
   SPA Hash Router
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
  return window.location.hash.slice(1) || '/';
}

export function startRouter(onRouteChange) {
  async function handleRoute() {
    const path = getCurrentPath();
    if (path === currentRoute) return;
    currentRoute = path;

    const handler = routes[path] || routes['/'];
    if (handler) {
      const content = document.getElementById('content');
      if (content) {
        content.style.opacity = '0';
        await new Promise(r => setTimeout(r, 120));
        await handler(content);
        content.style.opacity = '1';
      }
    }
    if (onRouteChange) onRouteChange(path);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
