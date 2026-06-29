# Personal Portfolio

A modern, dark-themed personal portfolio site built on top of the [Start Bootstrap - Freelancer](https://startbootstrap.com/template-overviews/freelancer/) template, heavily redesigned using [Claude Code](https://claude.ai/code).

**Live site:** https://ujjwalbb30.github.io/portfolio

---

## Built with Claude Code

This portfolio was redesigned end-to-end in a conversational session with Claude Code. Rather than writing boilerplate from scratch, the workflow was iterative — describing what I wanted, reviewing the result in the browser, and refining from there.

### What was built

- **Dark/light theme system** — CSS custom properties, persisted in `localStorage`, toggled via a navbar button
- **Hero split animation** — scroll-driven panel reveal using a `--hp` CSS custom property updated via `requestAnimationFrame`; smoothstep easing keeps it fluid at any scroll speed
- **HUD text scramble** — navbar brand cycles through domain keywords with a character-scramble animation
- **Animated favicon** — canvas-based Iron Man icon with a rotating gold arc, rendered at ~25fps
- **Morphing background** — two fixed image layers crossfade using CSS keyframe animation; `mix-blend-mode: screen` (dark) / `multiply` (light) composites them through solid section backgrounds without covering content
- **Collapsible sections** — work experience, education, certifications, and sports panels toggle with smooth `max-height` transitions
- **Content layouts** — side-by-side image + description grids using CSS Grid for project entries across work and education sections
- **Certifications** — collapsible platform groups with name previews when collapsed; scrollable card backs
- **Sports section** — cycling image + achievement previews with independent intervals; basketball video auto-plays on expand with a play-again overlay
- **Open Graph tags** — controls the thumbnail shown when the link is shared on iMessage and other platforms
- **Footer** — Claude Code mascot with a CSS glow pulse animation

### Stack

- **Base template:** Start Bootstrap Freelancer (Bootstrap 4.3.1 + jQuery 3.4.1)
- **Styling:** `css/custom.css` overlay — no Gulp recompile needed for any change
- **JS:** `js/theme.js` for theme toggle, text scramble, hero scroll animation, and animated favicon
- **Hosting:** GitHub Pages (static, no server)
- **AI assistant:** Claude Code (Anthropic)

---

## Original Template

The section below is preserved from the original Start Bootstrap Freelancer template this project was built on.

---

### [Start Bootstrap - Freelancer](https://startbootstrap.com/template-overviews/freelancer/)

[Freelancer](http://startbootstrap.com/template-overviews/freelancer/) is a one page freelancer portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid, window modals for each portfolio item, and a working PHP contact form.

#### Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-freelancer/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-freelancer.svg)](https://www.npmjs.com/package/startbootstrap-freelancer)
[![Build Status](https://travis-ci.org/BlackrockDigital/startbootstrap-freelancer.svg?branch=master)](https://travis-ci.org/BlackrockDigital/startbootstrap-freelancer)

#### Download and Installation

* [Download the latest release on Start Bootstrap](https://startbootstrap.com/template-overviews/freelancer/)
* Install via npm: `npm i startbootstrap-freelancer`
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-freelancer.git`

#### Usage

After downloading, edit the HTML and CSS files in a code editor. To preview, open `index.html` in a browser.

For live reload: run `npm install` then `npm start`.

#### Gulp Tasks

- `gulp` — builds everything
- `gulp watch` — live reload via BrowserSync
- `gulp css` — compiles SCSS to CSS
- `gulp js` — minifies JS
- `gulp vendor` — copies dependencies to `vendor/`

#### About

Start Bootstrap is an open source library of free Bootstrap templates and themes, released under the MIT license.

* https://startbootstrap.com

Created by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

Bootstrap was created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

#### Copyright and License

Copyright 2013-2019 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
