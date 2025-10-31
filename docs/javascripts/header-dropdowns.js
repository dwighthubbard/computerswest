(function () {
  function normalizeLabel(text) {
    return text.replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getDirectChild(element, selector) {
    return Array.from(element.children).find((child) => child.matches && child.matches(selector));
  }

  function buildDropdowns() {
    const tabsList = document.querySelector(".md-tabs__list");
    const primaryNavList = document.querySelector("nav.md-nav--primary > ul.md-nav__list");

    if (!tabsList || !primaryNavList) {
      return;
    }

    // Clean up any previous dropdowns so re-initialisation is idempotent
    tabsList.querySelectorAll(".cw-header-dropdown").forEach((node) => node.remove());
    tabsList
      .querySelectorAll(".cw-header-has-dropdown")
      .forEach((tab) => tab.classList.remove("cw-header-has-dropdown"));
    tabsList
      .querySelectorAll(".md-tabs__link[aria-haspopup]")
      .forEach((link) => link.removeAttribute("aria-haspopup"));

    const tabItems = Array.from(tabsList.children);
    const tabMap = new Map();
    tabItems.forEach((tab) => {
      const link = tab.querySelector(".md-tabs__link");
      if (!link) {
        return;
      }
      const key = normalizeLabel(link.textContent || "");
      tabMap.set(key, { tab, link });
    });

    const primaryNavItems = Array.from(primaryNavList.children);
    primaryNavItems.forEach((navItem) => {
      if (!navItem.classList.contains("md-nav__item--nested")) {
        return;
      }

      const directLabel = getDirectChild(navItem, "label.md-nav__link, a.md-nav__link");
      const labelEl = directLabel ? directLabel.querySelector(".md-ellipsis") : null;

      if (!labelEl) {
        return;
      }

      const label = normalizeLabel(labelEl.textContent || "");
      const tabEntry = tabMap.get(label);
      if (!tabEntry) {
        return;
      }

      const nestedNav = getDirectChild(navItem, "nav.md-nav");
      if (!nestedNav) {
        return;
      }

      const subLinks = nestedNav.querySelectorAll("ul > li > a.md-nav__link");
      if (!subLinks.length) {
        return;
      }

      const dropdown = document.createElement("div");
      dropdown.className = "cw-header-dropdown";

      const dropdownList = document.createElement("ul");
      dropdownList.className = "cw-header-dropdown__list";

      subLinks.forEach((subLink) => {
        const item = document.createElement("li");
        item.className = "cw-header-dropdown__item";

        const anchor = document.createElement("a");
        anchor.className = "cw-header-dropdown__link";
        anchor.href = subLink.getAttribute("href");
        anchor.textContent = (subLink.textContent || "").replace(/\s+/g, " ").trim();

        item.appendChild(anchor);
        dropdownList.appendChild(item);
      });

      dropdown.appendChild(dropdownList);
      tabEntry.tab.classList.add("cw-header-has-dropdown");
      tabEntry.link.setAttribute("aria-haspopup", "true");
      tabEntry.tab.appendChild(dropdown);
    });
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(buildDropdowns);

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(buildDropdowns);
  }
})();
