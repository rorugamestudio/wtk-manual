// Slides the page content sideways when moving between top-level sections (the header tabs):
// a tab further right comes in from the right, one further left from the left. Pages inside the
// same section swap without sliding. Runs on top of the theme's instant navigation, which swaps
// the page in place and announces it on document$.
(function () {
  "use strict";

  if (!document.startViewTransition || typeof document$ === "undefined") {
    return;
  }

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const swapTimeoutMs = 2000;

  let tabPaths = null;
  let currentPath = normalizePath(location.pathname);
  let resolveSwap = null;

  function normalizePath(path) {
    return path.endsWith("/") ? path : path.replace(/\/index\.html$/, "/");
  }

  // Section index pages in tab order. The tabs stay in the page while hidden in the compact layout.
  function buildTabPaths() {
    const paths = [];
    for (const link of document.querySelectorAll(".md-tabs__link[href]")) {
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin) {
        paths.push(normalizePath(url.pathname));
      }
    }
    return paths;
  }

  // The tab a page belongs to is the one with the longest path prefix (Home prefixes every page).
  function tabIndex(path) {
    tabPaths ??= buildTabPaths();
    let best = -1;
    for (let i = 0; i < tabPaths.length; i++) {
      if (path.startsWith(tabPaths[i]) && (best < 0 || tabPaths[i].length > tabPaths[best].length)) {
        best = i;
      }
    }
    return best;
  }

  function mainTop() {
    const main = document.querySelector(".md-main");
    return main ? main.getBoundingClientRect().top : 0;
  }

  function slide(targetPath) {
    if (reducedMotion.matches || resolveSwap || targetPath === currentPath) {
      return;
    }
    const from = tabIndex(currentPath);
    const to = tabIndex(targetPath);
    if (from < 0 || to < 0 || from === to) {
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
