# mjs19999.github.io/portfolio

Personal site for Mojtaba Almadan — computer engineer, Eastern Province, Saudi
Arabia.

Static HTML and CSS. No framework, no build step, no bundler. Clone it and open
`index.html`.

## Structure

```
index.html                        the page
work/khonaini-asset-system.html   case study for the one project with no public code
assets/css/tokens.css             colour, type scale, spacing — light and dark
assets/css/base.css               reset and element-level typography
assets/css/layout.css             masthead, shell, section grid, footer
assets/css/components.css         layer table, spec blocks, tiers, controls
assets/js/theme.js                theme toggle (18 lines)
assets/js/nav.js                  scrollspy for the nav (24 lines)
assets/pdf/                       CV
```

Two external requests: Google Fonts (Archivo, Newsreader, IBM Plex Mono). No
icon library, no animation library, no analytics.

## The one design rule

The hero is a table of the layers I've built at, from `07 service` down to
`01 gates`, and every row has a **"backed by"** column. A row cannot exist in
that table without an artifact someone can open — a repository, or a written
case study. Where there is no public code, the column says so instead of going
quiet.

That constraint is the point of the whole site. If you add a row, add the
artifact first.

Skills are grouped by what backs them rather than scored out of a hundred, and
the last group is the things I'm still learning. Both of those are deliberate;
please don't replace them with percentage bars.

## Local development

None required. If you want a server:

```bash
python -m http.server 8000
```

## Deployment

Pushing to `main` publishes to GitHub Pages via
`.github/workflows/static.yml`, which uploads the repository root as-is.

## Notes

`work/khonaini-asset-system.html` describes a system whose code is private. It
contains no employee data, no signatures and no screenshots — Fig. 6 is a
redrawn interface sketch with invented values, and the caption says so. The
aggregate data-quality figures are real and carry no personal data.

Two paragraphs in it describe a database constraint and a transaction fix as
pending. An HTML comment marks them. Update both when those ship.
