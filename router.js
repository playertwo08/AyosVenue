"use strict";

function normalizeLinks() {
  document
    .querySelectorAll('a[href^="/"]')
    .forEach((a) => a.setAttribute("href", routeURL(a.getAttribute("href"))));
}

const menu = document.querySelector("#mobile-menu");
const toggle = document.querySelector(".menu-toggle");

function setMenu(open) {
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

toggle.onclick = () => setMenu(menu.hidden);
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

function boot() {
  const route = location.hash.slice(1) || "/";
  path = route.split("?")[0].replace(/\/$/, "") || "/";
  const legacySection = path.split("/")[1];
  if (["venue", "facilities", "sports", "equipment", "about", "book", "embed", "how-it-works", "confirmation", "pass"].includes(legacySection)) {
    location.replace("#/courts");
    return;
  }
  if (path === "/ayos-technology") {
    location.replace("#/ayos-venue");
    return;
  }
  setMenu(false);
  window.scrollTo({ top: 0, behavior: "instant" });
  if (["/", "/courts"].includes(path)) company();
  else if (path === "/ayos-venue") ayos();
  else if (path === "/contact") contact();
  else if (path === "/showcase") showcase();
  else main.innerHTML = head("AYOS VENUE", "Page unavailable", "Explore the current court directory.", button("Explore courts", "/courts"));

  document.title = (path === "/ayos-venue" ? "Product showcase" :
    main.querySelector("h1")?.textContent.trim() || "Court discovery") + " | AYOS Venue";
  normalizeLinks();
  const currentRoute = path === "/contact" ? "#/contact?type=demo" : "#" + path;
  document.querySelectorAll("header a, #mobile-menu a, footer a").forEach((link) => {
    if (link.hash === currentRoute) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (path === "/courts") document.querySelector("#network-courts").scrollIntoView();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    setMenu(false);
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (link?.getAttribute("href") === "#main") {
    event.preventDefault();
    main.tabIndex = -1;
    main.focus();
    main.scrollIntoView();
    return;
  }
  if (link?.getAttribute("href").startsWith("/")) {
    event.preventDefault();
    location.href = routeURL(link.getAttribute("href"));
  }
});
addEventListener("hashchange", () => {
  boot();
});
new MutationObserver(normalizeLinks).observe(main, {
  childList: true,
  subtree: true,
});
boot();
