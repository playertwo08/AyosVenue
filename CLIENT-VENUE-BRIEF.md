# Client pickleball venue website

Use this brief to recreate the Baseline Sports Club experience as a standalone website for one client venue. The homepage represents the client and helps players choose a court and book. The reference site's AYOS Technology affiliate directory sits outside this client experience.

Build with **HTML, CSS, and vanilla JavaScript**. Bundle images and fonts locally, use relative asset paths, and make the site usable on a static host without a build step. Hash routes work for this version and support direct links without host rewrites. Serve the folder over HTTP for preview and booking checks.

## Client details to collect

| Input | What it controls |
| --- | --- |
| Venue name, logo, tagline, and brand colors | Header, homepage, browser title, favicon, and footer |
| Approved court and venue photos | Hero, court cards, detail pages, and gallery |
| Court IDs, names, surfaces, capacities, and hours | Listings, court details, and booking defaults |
| Hourly rates, currency, timezone, and booking policy | Price display, scheduling, and checkout |
| Verified address, map link, and contact channels | Visit and contact sections |
| Equipment, rental prices, and quantities | Rental page and booking extras |
| Booking provider URL, if supplied | Live booking button destination |
| Approved AYOS link and attribution | Footer credit and optional technology link |

Baseline Sports Club, its court names, photos, and prices are reference content. Label any retained examples as demo data. Use the client's actual sports and facilities when supplied, with pickleball as the lead activity.

## Pages and player journey

| Route | Purpose |
| --- | --- |
| `#/` | Client homepage with a court photo, venue name, **Book a court** button, featured courts, facilities, and visit details |
| `#/courts` | Venue court list with photos, capacity, hourly rate, and links to details |
| `#/courts/<court-id>` | Court details with photos, surface, hours, rate, capacity, and a booking button that selects this court |
| `#/book?court=<court-id>` | Booking entry with an optional preselected court |
| `#/equipment` | Rentals with prices and quantities when offered |
| `#/about` and `#/contact` | Venue story, verified hours, location, directions, and contact |

Keep the main navigation focused on Courts, About, and Contact, with **Book a court** as the primary action. Put equipment in the booking flow and link its page from the footer when useful. Keep the footer credit exactly **powered by ayos technology** and link it to the approved destination.

## Visual direction

Use a large court photograph with a dark overlay, a short headline in condensed type, and one prominent booking button. Follow the hero with a compact facts strip for verified details such as court count, hours, and location. Give court listings large images, clear prices, and enough space to compare at a glance.

The reference uses Barlow Condensed for display type, Barlow for body text, dark green charcoal `#192019`, and lime `#C3F35B`. Treat these as defaults until the client supplies branding. Use one accent and keep body text readable over imagery. Stack cards and the booking summary on narrow screens.

Preserve subtle background parallax in the hero, staggered reveals for sections and court cards, and restrained hover transitions. Reuse the reference parallax cap of 56 px as a starting point and tone it down on small screens. Honor `prefers-reduced-motion` so every section stays visible and usable with motion disabled. Keep native scrolling and visible keyboard focus.

## Booking behavior

If the client supplies a live booking URL, send players there from the booking buttons and pass the selected court only if the provider supports it. For a standalone demo, keep the current browser flow.

1. Choose the court, date, and hourly slots. For a venue with several sports, choose the sport first.
2. Add more slots or courts for the same sport when the booking policy allows it.
3. Enter sample player details and select equipment.
4. Review court charges, rental charges, and the amount due before confirmation. The demo can simulate full payment or a 50% deposit.
5. Show the confirmation and one QR pass per player. Demonstrate check-in once per pass.

Show available, held, booked, and unavailable slots with text as well as color. Calculate court charges from selected hours and equipment charges from the quantities per reservation. Use the venue timezone for dates and times. The reference demo uses five-minute holds and stores bookings in the browser. Label the flow as a demo and use sample details. Shared availability, live payments, and passes that work across devices depend on a booking provider or backend.

## Adapt the existing files

| Reference file | Client adaptation |
| --- | --- |
| `index.html` | Set the venue name, metadata, logo, nav, and footer |
| `router.js` and `app.js` | Make the existing venue home render at `#/`. Update the links to `#/venue/baseline` and wire the client court routes |
| `data.js` | Replace demo venue, court, and equipment records. Keep IDs consistent across data, routes, and booking selections |
| `booking.js` | Derive the starting court from a valid route selection or the first eligible court in the client catalogue |
| `demo-store.js` | Reuse local pricing and booking rules for the demo. Give the client its own storage keys, including the draft and reset keys |
| `style.css`, `energy.css`, and `motion.js` | Reuse the base layout, sports typography, and motion. Set client tokens in the stylesheet loaded last |
| `assets/` | Replace concept imagery with approved client photography. Keep font and QR library licenses with reused assets |

Search for `Baseline`, `baseline`, `court-1`, and `court-6` during the adaptation. The reference hard-codes some branding and assumes specific sample courts. Build featured and related court lists from client data so a venue with one court renders correctly. Remove unused directory navigation and scripts after moving the client homepage to the root. The reference's `affiliates.js` and `directory.css` support the AYOS directory.

## Acceptance checks

- The root opens on the client homepage. Every booking button reaches the intended flow, and each court detail preselects the correct court.
- Direct links, browser back navigation, the mobile menu, and keyboard focus work. Check layouts at 360, 768, and 1280 px for overflow and readable controls.
- Court photos have useful alt text. Content stays visible with reduced motion enabled.
- With sample data, complete a booking with multiple slots and an equipment rental. Verify the subtotal, total, and any deposit. Check reload recovery, hold expiry, unavailable slots, and repeated check-in.
- Check a catalogue with one court and a link with an invalid court ID. Show a useful fallback in each case.
- Review venue facts, sample labels, contact links, and the footer credit before sharing. Keep `noindex` on the demo and update metadata when the client approves a public release.

## References in this workspace

- [Project README](README.md)
- [Client homepage screenshot](docs/screenshots/home-desktop.png)
- [Client mobile screenshot](docs/screenshots/home-mobile.png)
- [Demo venue and court data](data.js)
