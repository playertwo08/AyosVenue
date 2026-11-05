"use strict";
const main = document.querySelector("main");
let path = "/";
function routeURL(url) {
  if (url === "/book") return clientPage();
  if (url === "/facilities" || url === "/sports") return clientPage("/courts");
  return url.startsWith("/") ? "#" + url : url;
}
const esc = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const money = (n) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(n);
const time = (h) => `${h % 12 || 12}:00 ${h < 12 ? "AM" : "PM"}`;
const dateLabel = (d) =>
  new Date(d + "T12:00:00").toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
const catalog = VENUE_DATA;
function clientPage(route = "/") {
  return "client-venue/index.html#" + route;
}
function clientPhoto(name, alt, eager = false) {
  return `<img src="client-venue/assets/${esc(name)}" alt="${esc(alt)}" width="1800" height="1200" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
}
function photo(name, alt, eager = false) {
  return `<img src="assets/${name}" alt="${esc(alt)}" width="1800" height="1200" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
}
function button(label, url, secondary = false) {
  return `<a class="button ${secondary ? "secondary" : ""}" href="${routeURL(url)}">${label}<span aria-hidden="true">↗</span></a>`;
}
function head(eyebrow, title, description = "", actions = "") {
  return `<section class="page-hero wrap"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1>${description ? `<p>${description}</p>` : ""}${actions ? `<div class="hero-actions">${actions}</div>` : ""}</section>`;
}
const featureGroups = [
  [
    "Booking, without the back-and-forth.",
    "Guest reservations, an interactive calendar, real-time availability, multiple courts and slots, automatic pricing, review, confirmation, and recovery.",
    "Browser demo: booking, holds, pricing, recovery",
  ],
  [
    "Every player, connected.",
    "Contact and player registration, capacity limits, individual QR passes, one-time validation, manual check-in support, and attendance records.",
    "Browser demo: passes and one-time check-in; staff workflows described",
  ],
  [
    "The right space, at the right time.",
    "Multi-sport resources, operating hours, schedule exceptions, court pricing, capacity rules, and configurable booking policies.",
    "Browser demo: three courts, two sports, sample schedules",
  ],
  [
    "Payments with a clear status.",
    "QR payment integration, full or deposit policies, provider verification, payment records, refund requests and approval, and interrupted-payment recovery.",
    "Sandbox only: no PayMongo connection, money movement, or refunds",
  ],
  [
    "Gear that stays in the loop.",
    "Rental stock, equipment checkout, returns, rental history, and inventory accountability.",
    "Browser demo: rental selection and stock validation; returns described",
  ],
  [
    "Organized behind the scenes.",
    "Walk-ins, booking changes, recurring reservations, status history, owner and receptionist access, staff authentication, permissions, and multi-venue separation.",
    "PDF capabilities; administrative workflows are not implemented in this showcase",
  ],
  [
    "The details don’t get lost.",
    "Notifications, email pass delivery, reminders, reports, exports, activity logs, financial audit records, and operational data recovery.",
    "PDF capabilities; delivery, reporting, and integrations are not connected",
  ],
];
function ayos() {
  main.innerHTML =
    head(
      "AYOS VENUE / THE TECHNOLOGY BEHIND THE GAME",
      "Powering smarter<br>sports venues.",
      "Connect reservations, players, payments, facilities, and operations into one considered experience.",
      button("Visit the venue website", "/book") +
        button("Talk to AYOS", "/contact?type=demo", true),
    ) +
    `<section class="section wrap"><div class="gallery-toolbar"><button class="chip" data-mode="customer" aria-pressed="true">Customer experience</button><button class="chip" data-mode="technology" aria-pressed="false">Venue technology</button></div><div class="split"><div id="mode-copy"><span class="eyebrow">IT STARTS WITH YOUR CUSTOMER</span><h2>A great game starts<br>before arrival.</h2><p>Book without an account. See what’s available. Register your players. Arrive with a digital pass.</p></div><div><div class="gallery-toolbar"><button class="chip" data-device="desktop" aria-pressed="true">Desktop</button><button class="chip" data-device="mobile" aria-pressed="false">Mobile</button></div><div class="mockup" id="device"><div class="browser-bar">${esc(catalog.venue)} / VENUE WEBSITE</div><iframe src="client-venue/index.html#/" title="Breakwater Racket Club website preview" loading="lazy"></iframe></div></div></div></section><section class="dark"><div class="section wrap"><span class="eyebrow">A SMARTER VENUE EXPERIENCE</span><h2>One venue.<br>Every moment connected.</h2><div class="journey">${[
      ["Courts", "Schedules and availability"],
      ["Players", "Registration and passes"],
      ["Bookings", "Validated reservations"],
      ["Payments", "A clear payment journey"],
      ["Arrival", "QR-based check-in"],
    ]
      .map(
        (x, i) =>
          `<div><span>0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`,
      )
      .join(
        "",
      )}</div></div></section><section class="section wrap"><div class="section-head"><div><span class="eyebrow">LESS FRICTION. MORE POSSIBILITY.</span><h2>Better for players.<br>Better for your business.</h2></div><p>Accept reservations around the clock, reduce scheduling conflicts, simplify arrivals, and support multiple sports.</p></div><div class="features">${featureGroups.map((x, i) => `<details ${i === 0 ? "open" : ""}><summary>${x[0]}</summary><p>${x[1]}</p><div class="tags"><span>${x[2]}</span></div></details>`).join("")}</div></section><section class="section wrap split"><div><span class="eyebrow">BOOKING THAT FITS YOUR WEBSITE</span><h2>Your brand.<br>A connected booking.</h2><p>Use a dedicated booking page, embed the customer journey, or start with a simple “Book now” button.</p>${button("Open the venue website", "/book")}<p class="note">The preview above opens the venue homepage. Players can browse courts there and begin the booking demo.</p></div><div class="mockup"><span class="eyebrow">YOUR VENUE WEBSITE</span><h3>Make time for your next match.</h3><p>Client venue website</p>${button("Visit Breakwater", "/book")}</div></section><section class="section wrap center"><span class="eyebrow">DEVELOPMENT STATUS</span><h2>Built to demonstrate.<br>Prepared for verification.</h2><p>The official feature document describes a system undergoing integration, QA, and release preparation. Production payments, notifications, dashboard acceptance, and deployment require their respective verification and approval.</p>${button("Request a product demo", "/contact?type=demo")}</section>`;
  document.querySelectorAll("[data-device]").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelector("#device")
          .classList.toggle("mobile", b.dataset.device === "mobile");
        document
          .querySelectorAll("[data-device]")
          .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      }),
  );
  document.querySelectorAll("[data-mode]").forEach(
    (b) =>
      (b.onclick = () => {
        document.querySelector("#mode-copy").innerHTML =
          b.dataset.mode === "customer"
            ? '<span class="eyebrow">IT STARTS WITH YOUR CUSTOMER</span><h2>A great game starts<br>before arrival.</h2><p>Book without an account. See what’s available. Register your players. Arrive with a digital pass.</p>'
            : '<span class="eyebrow">CONNECTED VENUE OPERATIONS</span><h2>Fewer conflicts.<br>Clearer operations.</h2><p>Temporary holds, validated availability, capacity limits, and connected booking records support the customer journey. This browser calculates demo prices and checks its locally saved reservations.</p>';
        document
          .querySelectorAll("[data-mode]")
          .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      }),
  );
}
function contact() {
  main.innerHTML =
    head(
      "AYOS VENUE / FOR VENUE OWNERS",
      "Your venue.<br>A smarter next chapter.",
      "Create a local demo inquiry preview. Nothing is transmitted.",
    ) +
    `<section class="section wrap contact-grid"><div><span class="eyebrow">TECHNOLOGY INQUIRIES</span><h3>AYOS Venue</h3><p>Tell us about your venue and the booking experience you want to create.</p></div><form id="contact-form"><div class="field"><label for="contact-name">Name</label><input id="contact-name" required maxlength="80" autocomplete="name"></div><div class="field"><label for="contact-email">Email</label><input id="contact-email" type="email" required maxlength="180" autocomplete="email"></div><div class="field"><label for="contact-message">Tell us about your venue</label><textarea id="contact-message" required maxlength="1500"></textarea></div><p class="note">Demonstration form. No message is sent or saved.</p><button class="button" type="submit">Preview inquiry ↗</button><div id="contact-result" role="status"></div></form></section>`;
  document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    document.querySelector("#contact-result").innerHTML =
      `<div class="mockup" style="margin-top:24px"><span class="eyebrow">INQUIRY PREVIEW · NOT SENT</span><h3>${esc(document.querySelector("#contact-name").value)}</h3><p>${esc(document.querySelector("#contact-email").value)}</p><p style="white-space:pre-wrap">${esc(document.querySelector("#contact-message").value)}</p><p class="note">Connect an approved contact destination before publishing.</p></div>`;
  };
}
const slides = [
  [
    "The venue",
    "A place worth making time for.",
    "A pickleball-first concept club built around the people who play.",
    "pickleball-hero.jpg",
    "Explore the facilities",
    "/facilities",
  ],
  [
    "Discover",
    "Find your kind of game.",
    "Explore two pickleball courts and one indoor badminton court.",
    "pickleball-hero.jpg",
    "Choose a sport",
    "/sports",
  ],
  [
    "Book",
    "Your court. Your schedule.",
    "Select multiple courts or time slots without creating an account.",
    "badminton.jpg",
    "Visit Breakwater",
    "/book",
  ],
  [
    "Pay",
    "A clear path to confirmation.",
    "Full or deposit sandbox payment. No real money moves.",
    "tennis.jpg",
    "Visit Breakwater",
    "/book",
  ],
  [
    "Players",
    "Make room for your people.",
    "Register every player, with capacity checked before confirmation.",
    "basketball.jpg",
    "Explore the journey",
    "/ayos-venue",
  ],
  [
    "Digital pass",
    "Your game, in your pocket.",
    "A unique, scannable QR player pass for every registered player.",
    "pickleball.jpg",
    "Visit Breakwater",
    "/book",
  ],
  [
    "Arrival",
    "Less waiting. More playing.",
    "Try one-time check-in validation from a confirmed demo booking.",
    "badminton.jpg",
    "See how it works",
    "/ayos-venue",
  ],
  [
    "Play",
    "This is what it’s all for.",
    "Great spaces. Friendly competition. Time well spent.",
    "tabletennis.jpg",
    "Find your court",
    "/facilities",
  ],
  [
    "Powered by AYOS",
    "Physical spaces. Connected experiences.",
    "Discover the platform behind availability, reservations, and player passes.",
    "tennis.jpg",
    "Meet AYOS Venue",
    "/ayos-venue",
  ],
  [
    "AYOS Technology",
    "Your venue’s next chapter.",
    "Practical digital solutions for smarter venue operations.",
    "basketball.jpg",
    "Talk to AYOS",
    "/contact?type=demo",
  ],
];
function showcase() {
  let index = 0;
  main.innerHTML =
    head(
      "A GUIDED CLIENT PRESENTATION",
      "The place. The play.<br>The possibility.",
      "Use the arrows or your keyboard to move through the experience.",
    ) +
    '<section class="section wrap"><div id="slide"></div><div class="showcase-controls"><button class="button secondary" id="prev">← Previous</button><div class="showcase-dots"></div><button class="button" id="next">Next →</button></div><p class="note">Presentation concept. Venue details are samples; payments and check-in are demonstrations.</p></section>';
  function render() {
    const s = slides[index];
    document.querySelector("#slide").innerHTML =
      `<div class="showcase-stage" aria-live="polite">${photo(s[3], s[0] + " · illustrative image", true)}<div class="showcase-content"><span class="eyebrow">${String(index + 1).padStart(2, "0")} / ${s[0].toUpperCase()}</span><h2>${s[1]}</h2><p>${s[2]}</p>${button(s[4], s[5])}</div></div>`;
    document.querySelector(".showcase-dots").innerHTML = slides
      .map(
        (s, i) =>
          `<button data-slide="${i}" class="${i === index ? "active" : ""}" aria-label="Slide ${i + 1}: ${s[0]}" ${i === index ? 'aria-current="step"' : ""}>${i + 1}</button>`,
      )
      .join("");
    document.querySelectorAll("[data-slide]").forEach(
      (b) =>
        (b.onclick = () => {
          index = Number(b.dataset.slide);
          render();
        }),
    );
    document.querySelector("#prev").disabled = index === 0;
    document.querySelector("#next").disabled = index === 9;
  }
  document.querySelector("#prev").onclick = () => {
    index = Math.max(0, index - 1);
    render();
  };
  document.querySelector("#next").onclick = () => {
    index = Math.min(9, index + 1);
    render();
  };
  document.onkeydown = (e) => {
    if (path !== "/showcase") return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
    if (e.key === "ArrowRight") {
      index = Math.min(9, index + 1);
      render();
    }
    if (e.key === "ArrowLeft") {
      index = Math.max(0, index - 1);
      render();
    }
  };
  render();
}
