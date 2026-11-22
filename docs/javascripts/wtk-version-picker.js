// Turns the Changelog into one release at a time. The version picker (<div class="wtk-version-picker">)
// gets a dropdown of the releases on the page, one per H2 heading, newest first; only the picked
// release's notes are shown, and the table of contents lists only its sections. The URL hash keeps
// the pick, so links and search results that point into another release (or the browser's Back
// button) switch to it. Without this script every release stays on the page.
//
// Each release is wrapped in a .wtk-release box. The other releases wait in a zero-height holder
// right after the one shown, instead of display: none: the theme's navigation.tracking measures
// every heading of the table of contents, and a heading without a box measures as the top of the
// page, so it would count as scrolled past and land in the address bar. At the very bottom of the
// page the theme still counts every heading as passed, so the address it writes is kept on the
// release shown (see correctUrl).
(function () {
  "use strict";

  const hiddenClass = "wtk-version-hidden";

  // The heading's text without its icon and permalink.
  function releaseName(heading) {
    const copy = heading.cloneNode(true);
    for (const extra of copy.querySelectorAll(".headerlink, .twemoji")) {
      extra.remove();
    }
    return copy.textContent.trim();
  }

  // Wraps each release (its heading and the elements after it, up to the next release) in a box.
  function wrapReleases(headings) {
    return headings.map((heading, index) => {
      const next = headings[index + 1] || null;
      const elements = [];
      for (let element = heading; element && element !== next; element = element.nextElementSibling) {
        elements.push(element);
      }
      const box = document.createElement("div");
      box.className = "wtk-release";
      heading.before(box);
      box.append(...elements);
      return { id: heading.id, heading, box };
    });
  }

  // The element a hash names, if it is on the page.
  function hashTarget() {
    if (!location.hash) {
      return null;
    }
    try {
      return document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch {
      return null;
    }
  }

  // Table of contents entries (sidebar and the compact layout's copy) of a release.
  function tocItems(id) {
    const items = [];
    for (const link of document.querySelectorAll(".md-nav--secondary a.md-nav__link")) {
      if (link.hash === "#" + id) {
        const item = link.closest("li");
        if (item) {
          items.push(item);
        }
      }
    }
    return items;
  }

  let sync = null;
  let correctUrl = null;

  // navigation.tracking writes the heading scrolled past with history.replaceState.
  const replaceState = history.replaceState;
  history.replaceState = function (state, unused, url) {
    if (correctUrl && url !== undefined && url !== null) {
      url = correctUrl(url);
    }
    return replaceState.call(this, state, unused, url);
  };

  function setup() {
    sync = null;
    correctUrl = null;
    const picker = document.querySelector(".md-content .wtk-version-picker");
    if (!picker) {
      return;
    }
    const article = picker.closest("article") || document;
    const headings = Array.from(article.querySelectorAll("h2[id]"));
    if (headings.length === 0) {
      return;
    }
    const releases = wrapReleases(headings);

    const holder = document.createElement("div");
    holder.className = "wtk-release-holder";
    holder.setAttribute("aria-hidden", "true");
    holder.inert = true;
    releases[releases.length - 1].box.after(holder);

    const select = document.createElement("select");
    select.id = "wtk-version-select";
    for (const release of releases) {
      const option = document.createElement("option");
      option.value = release.id;
      option.textContent = releaseName(release.heading);
      select.appendChild(option);
    }

    const label = document.createElement("label");
    label.htmlFor = select.id;
    label.textContent = "Version";

    picker.replaceChildren(label, select);

    function releaseHolding(element) {
      const box = element.closest(".wtk-release");
      return releases.find((release) => release.box === box) || null;
    }

    let shown = null;
    function show(release) {
      if (release === shown) {
        return;
      }
      shown = release;
      select.value = release.id;
      holder.before(release.box);
      for (const other of releases) {
        const hide = other !== release;
        if (hide) {
          holder.append(other.box);
        }
        for (const item of tocItems(other.id)) {
          item.classList.toggle(hiddenClass, hide);
        }
      }
    }

    // Shows the release the hash points into (the newest when it points nowhere) and brings the
    // target into view, since it was out of sight when the browser or the theme scrolled to it.
    sync = () => {
      const target = hashTarget();
      const holding = target ? releaseHolding(target) : null;
      const release = holding || (target ? shown : null) || releases[0];
      const changed = release !== shown;
      show(release);
      if (changed && holding) {
        target.scrollIntoView();
      }
    };

    // An address pointing into a hidden release points at the last heading of the shown release
    // that is on screen instead.
    correctUrl = (url) => {
      const next = new URL(url, location.href);
      let target = null;
      try {
        target = next.hash ? document.getElementById(decodeURIComponent(next.hash.slice(1))) : null;
      } catch {
        return url;
      }
      if (!target || !holder.contains(target) || !shown) {
        return url;
      }
      let id = shown.id;
      for (const heading of shown.box.querySelectorAll("h2[id], h3[id]")) {
        if (heading.getBoundingClientRect().top < window.innerHeight) {
          id = heading.id;
        }
      }
      next.hash = id;
      return next.href;
    };

    select.addEventListener("change", () => {
      const release = releases.find((candidate) => candidate.id === select.value);
      if (!release) {
        return;
      }
      show(release);
      // Keeps the pick in the address bar and in the history, without scrolling away from the picker.
      history.pushState(history.state, "", "#" + release.id);
    });

    sync();
  }

  function follow() {
    if (sync) {
      sync();
    }
  }

  // The theme's instant navigation moves between anchors with the History API, which fires no
  // hashchange: its location$ reports those moves too.
  if (typeof location$ !== "undefined") {
    location$.subscribe(follow);
  } else {
    window.addEventListener("hashchange", follow);
  }
  window.addEventListener("popstate", follow);

  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
