# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio site for Ujjwal Kalkhande, built on the "Start Bootstrap - Freelancer" template. Hosted on GitHub Pages at `ujjwal5.github.io`. Single-page app with smooth scroll navigation.

## Development Commands

```bash
npm install          # Install dependencies (first-time setup)
npm start            # Start dev server with live reload (gulp watch → BrowserSync on port 3000)
gulp                 # Build everything (vendor, CSS, JS) — one-off production build
gulp css             # Compile SCSS → CSS and minify
gulp js              # Minify JS files
gulp vendor          # Copy npm packages to vendor/ directory
```

There are no tests. The `.travis.yml` CI runs `npm test` + `gulp` on push.

## Architecture

**Build pipeline:** Gulp 4 — SCSS compiles to `css/freelancer.css` + `.min.css`; JS is minified to `*.min.js`; npm dependencies are copied to `vendor/`.

**SCSS structure** under `scss/`:
- `freelancer.scss` — entry point that imports everything
- `base/_variables.scss` — color/typography overrides (primary teal `#1abc9c`, secondary dark blue `#2c3e50`)
- `base/_page.scss` — base page styles
- `components/` — buttons, dividers
- `layout/` — navbar, masthead, portfolio grid, contact, footer

**JavaScript** under `js/`:
- `freelancer.js` — smooth scroll, scroll-spy for nav highlighting, navbar collapse, scroll-to-top button
- `contact_me.js` — AJAX form submission to `mail/contact_me.php`
- `jqBootstrapValidation.js` — client-side form validation

**Content:** Everything visible is in `index.html` (single file, ~1100 lines). Portfolio project thumbnails live in `img/portfolio/`.

**Contact form backend:** `mail/contact_me.php` — PHP handler that validates, sanitizes, and emails to `ujjwaltech.05@gmail.com`.

## Key Dependencies

- Bootstrap 4.3.1 + jQuery 3.4.1 (loaded from `vendor/`)
- Font Awesome 5.10.2 for icons
- Magnific Popup for image lightbox modals
- jQuery Easing for scroll animations

## Editing Content

All visible content (text, sections, portfolio items, links) is in `index.html`. After editing SCSS, run `gulp css` to recompile — do not edit `css/freelancer.css` directly, it is generated output. Similarly, do not edit `*.min.js` files — edit the non-minified source and run `gulp js`.

The `vendor/` directory is fully generated; never edit it manually.
