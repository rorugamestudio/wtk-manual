// Instant navigation swaps the page body but keeps the stylesheets and scripts the tab was opened
// with. After a deploy, the first page fetched from the new build reloads the tab instead, so the
// build shown in the footer is always the one running.
(function () {
  "use strict";

  if (typeof document$ === "undefined") {
    return;
  }

  function currentBuild() {
    const footer = document.querySelector("[data-wtk-build]");
    return footer ? footer.dataset.wtkBuild : "";
  }

  const loadedBuild = currentBuild();
  if (!loadedBuild) {
    return;
  }

  document$.subscribe(() => {
    const build = currentBuild();
    if (build && build !== loadedBuild) {
      location.reload();
    }
  });
})();
