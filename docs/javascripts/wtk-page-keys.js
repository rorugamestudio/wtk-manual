// Moves between pages with J (next) and K (previous) instead of the theme's N and P. The theme
// reads its keys from a window keydown listener, so this one runs first (capture) and keeps N and
// P from reaching it. Like the theme, it stays out of the way while typing or searching.
(function () {
  "use strict";

  const relByKey = { j: "next", k: "prev" };
  const themeKeys = ["n", "p"];

  // The search dialog is the page's only shadow root: focus inside it means the reader is searching.
  function isTyping(element) {
    if (!element) {
      return false;
    }
    if (element.shadowRoot) {
      return true;
    }
    if (element instanceof HTMLInputElement) {
      return element.type !== "radio";
    }
    return element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement || element.isContentEditable;
  }

  // The same route the theme takes: a link the instant navigation picks up like any other click.
  function open(rel) {
    const target = document.querySelector(`link[rel=${rel}]`);
    if (!(target instanceof HTMLLinkElement)) {
      return;
    }
    const link = document.createElement("a");
    link.href = target.href;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  window.addEventListener("keydown", (event) => {
    if (event.isComposing || event.ctrlKey || event.metaKey || isTyping(document.activeElement)) {
      return;
    }
    if (themeKeys.includes(event.key)) {
      event.stopImmediatePropagation();
      return;
    }
    const rel = relByKey[event.key];
    if (rel) {
      open(rel);
    }
  }, true);
})();
