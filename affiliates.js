"use strict";

function company() {
  main.innerHTML = `<section class="network-hero"><div class="network-image">${clientPhoto(catalog.hero.image, catalog.hero.alt, true)}</div><div class="network-shade"></div><div class="wrap network-content"><span class="eyebrow">AYOS VENUE / COURT DISCOVERY</span><h1>Find your court.<br><span>Your next game<br>starts here.</span></h1><p>Discover pickleball spaces connected through AYOS Venue. Get to know the court, meet the venue, and make time to play.</p><div class="hero-actions"><button class="button" id="explore-network">Find a venue <span>↘</span></button>${button("How AYOS Venue works", "/ayos-venue", true)}</div><div class="network-caption"><span>COURTS. COMMUNITY. ONE CONNECTED EXPERIENCE.</span><span>MVP SHOWCASE · DEMO VENUE</span></div></div></section><section class="section wrap split" id="network-courts">
    <div class="large-photo">${clientPhoto(catalog.hero.image, catalog.hero.alt)}</div>
    <div>
      <span class="eyebrow">THE AYOS VENUE NETWORK · DEMO VENUE</span>
      <h2>${esc(catalog.venue)}</h2>
      <p>Visit Breakwater’s website to browse courts, check demo availability, and start a reservation.</p>
      ${button("Visit Breakwater Racket Club", clientPage())}
    </div>
  </section><section class="dark"><div class="section wrap"><div class="section-head"><div><span class="eyebrow">THE TECHNOLOGY BEHIND THE CONNECTION</span><h2>A better way<br>to get on court.</h2></div><p>AYOS Technology provides the platform behind the venue experience. The directory helps you discover; each venue’s site helps you decide and book.</p></div><div class="journey">${[
    ["Discover", "Find an affiliated venue."],
    ["Explore", "Get to know the venue and its spaces."],
    ["Choose", "Select your court and schedule."],
    ["Reserve", "Try the guest booking demonstration."],
    ["Play", "Preview a digital player pass."],
  ]
    .map(
      (x, i) =>
        `<div><span>0${i + 1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`,
    )
    .join(
      "",
    )}</div><div style="margin-top:32px">${button("Discover AYOS Venue", "/ayos-venue")}</div></div></section><section class="cta"><div><span class="eyebrow">FOR PICKLEBALL VENUE OWNERS</span><h2>Put your courts<br>in the conversation.</h2><p>Explore how your venue could connect with AYOS Venue.</p></div><a class="button white" href="#/contact?type=demo">Talk to AYOS Technology ↗</a></section>`;
  document.querySelector("#explore-network").onclick = () =>
    document.querySelector("#network-courts").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
}
