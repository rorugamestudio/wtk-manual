// Slides the page content sideways when moving between pages: a page further right in the
// navigation comes in from the right, one further left from the left. Runs on top of the
// theme's instant navigation, which swaps the page in place and announces it on document$.
(function () {
  "use strict";

  if (!document.startViewTransition || typeof document$ === "undefined") {
    return;
  }

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const swapTimeoutMs = 2000;

  let pageOrder = null;
  let currentPath = normalizePath(location.pathname);
  let resolveSwap = null;

  function normalizePath(path) {
    return path.endsWith("/") ? path : path.replace(/\/index\.html$/, "/");
  }

  // Page order as listed in the primary navigation: the tabs and sidebars follow the same order.
  function buildPageOrder() {
    const order = new Map();
    for (const link of document.querySelectorAll(".md-nav--primary a.md-nav__link[href], .md-tabs__link[href]")) {
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) {
        continue;
      }
      const path = normalizePath(url.pathname);
      if (!order.has(path)) {
        order.set(path, order.size);
      }
    }
    return order;
  }

  function pageIndex(path) {
    pageOrder ??= buildPageOrder();
    return pageOrder.get(path);
  }

  function mainTop() {
    const main = document.querySelector(".md-main");
    return main ? main.getBoundingClientRect().top : 0;
  }

  function slide(targetPath) {
    if (reducedMotion.matches || resolveSwap || targetPath === currentPath) {
      return;
    }
    const from = pageIndex(currentPath);
    const to = pageIndex(targetPath);
    if (from === undefined || to === undefined) {
      return;
    }

    root.dataset.wtkSlide = to > from ? "forward" : "back";
    const oldTop = mainTop();

    const transition = document.startViewTransition(() => new Promise((resolve) => {
      const timeout = setTimeout(finish, swapTimeoutMs);
      function finish() {
        clearTimeout(timeout);
        resolveSwap = null;
        // The old snapshot is laid out where the new content starts; shift it back to where it
        // was on screen so a page left scrolled down doesn't jump before sliding away.
        root.style.setProperty("--wtk-slide-old-offset", `${oldTop - mainTop()}px`);
        resolve();
      }
      resolveSwap = finish;
    }));

    transition.finished.finally(() => {
      delete root.dataset.wtkSlide;
      root.style.removeProperty("--wtk-slide-old-offset");
    });
  }

  function isInstantLink(link, event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return false;
    }
    if (link.target && link.target !== "_self" || link.hasAttribute("download")) {
      return false;
    }
    return link.origin === location.origin;
  }

  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (link && isInstantLink(link, event)) {
      slide(normalizePath(link.pathname));
    }
  }, true);

  window.addEventListener("popstate", () => {
    slide(normalizePath(location.pathname));
  });

  document$.subscribe(() => {
    currentPath = normalizePath(location.pathname);
    if (resolveSwap) {
      resolveSwap();
    }
  });
})();
