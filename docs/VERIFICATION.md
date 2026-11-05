# Verification · static conversion

Date: 4 November 2026 (Asia/Manila).

## Source checks

- Application code is HTML, CSS and JavaScript only. No `.java`, `.jar`, Maven wrapper, `pom.xml`, Spring configuration, or server source remains in the active project.
- JavaScript syntax checks passed for the application scripts.
- Source contains no `fetch()` calls, backend API requests or Thymeleaf attributes.
- Assets and fonts use relative paths. The QR generator is bundled locally.
- The previous Java source/build files are preserved in a recoverable backup outside this project.

## Browser-demo logic checks

A Node JavaScript harness outside the deliverable tested catalogue data, multi-court/slot totals, deposits, unique QR image generation, idempotent confirmation, repeated check-in rejection, competing local slots, tab ownership, equipment contention, hold expiry, duplicate-slot rejection, player capacity and reset. All passed. These are browser-demo checks, not production concurrency/security tests.

## Manual browser checks

- Affiliate search empty state, price filtering, court details and venue links worked.
- A complete booking with two court hours and two paddles produced PHP 1,100 total, PHP 550 deposit and two locally generated QR images.
- Both QR images loaded from local data URIs; the demo check-in action changed the first pass to Checked in.
- The narrow embedded booking widget rendered and showed the locally recovered booking.
- Sixteen static hash routes rendered without error, broken loaded images or horizontal overflow at the measured desktop viewport (1451 CSS pixels).
- No console warnings/errors appeared in the inspected browser log.

## Verification limits

The in-app browser blocks `file:` URLs, so direct double-click opening could not be inspected there; browser checks used an ordinary loopback static server, with no Java/backend/API service. The documented viewport override did not change the measured desktop dimensions during this run, so a new full mobile/tablet browser audit is not claimed. Existing responsive CSS and reduced-motion rules are preserved; the narrow embedded booking view was checked.

No real affiliate relationship, cross-device availability, protected records, payment, email or message delivery was verified or connected. Local storage is editable and intended for sample data only.
