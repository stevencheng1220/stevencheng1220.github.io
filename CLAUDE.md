# CLAUDE.md

## Project

Steven Cheng's personal site, served by GitHub Pages from `master` at `csteven.io` (`CNAME`).
Hand-written HTML with no build step: `index.html` is the full-page home, and each project
(drone, lung segmentation, MimickNet and its demo, XPRIZE) has its own page. Bootstrap 4.5,
jQuery, and fullPage.js load from CDNs.

## Conventions

- Style the home page in `css/index.scss` and every project page in `css/project_page.scss`, then
  compile each with Sass to the committed `.css` and `.css.map` beside it; no build config is
  committed.
- The resume is a Google Drive link in `index.html`; change its URL and its "Updated <date>" text
  together.

## Gotchas

- `node_modules/` (jQuery, img-slider) is committed but no page loads it; pages use CDN jQuery and
  the copies in `js/imgslider.min.js` and `css/imgslider.min.css` → edit those copies.
- `d41d8cd9.htaccess` is an Apache rewrite that GitHub Pages never applies → never rely on it for
  routing.
- `js/load_header.js` loads a `header_div.html` that does not exist, no page includes it, and
  `css/index_old.scss` is compiled nowhere → treat both as dead.
- `mimicknetdemo.html` keeps its TensorFlow.js model code commented out, so `json/model.json` is
  never loaded → do not expect the demo to run inference.
