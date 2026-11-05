# AYOS Venue MVP and Showcase

AYOS Venue helps players discover affiliated pickleball courts and visit the venue that operates them. This static showcase uses Breakwater Racket Club as its demo venue.

## Preview

Serve the project root, including the bundled client site.

```powershell
python -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766/#/courts.

## Player journey

1. Open Breakwater Racket Club from the AYOS Venue directory.
2. Browse courts on the Breakwater website and choose a court.
3. Start the reservation from the venue’s court page.

The AYOS Venue product page previews the Breakwater homepage. The guided showcase and venue-owner inquiry stay on AYOS Venue. The client site also lists Harbor Hall for badminton.

## Source

- `index.html`, `affiliates.js`, `app.js`, and `router.js` power the AYOS Venue showcase.
- `client-venue/` is the bundled copy of the supplied Breakwater website. Its `data.js` feeds both the directory and the venue pages.
- `client-venue/booking.js` and `client-venue/demo-store.js` run reservations, payment simulations, and player passes on the venue website.
- The source uses HTML, CSS, and vanilla JavaScript. Keep both sites in the same folder structure when copying the package to a static host.

Breakwater remains a demonstration venue. Reservations, payment simulations, and passes use browser-local storage.
