# mjs19999.github.io/portfolio

Personal site for Mojtaba Almadan — computer engineer, Eastern Province, Saudi
Arabia.

Static HTML and CSS. No framework, no build step, no bundler. Clone it and open
`index.html`.

## Structure

```
index.html                           home, plain English
ar/index.html                        home, plain Arabic (dir="rtl")
full/index.html                      home, technical English
ar/full/index.html                   home, technical Arabic
work/khonaini-asset-system.html      case study, English
ar/work/khonaini-asset-system.html   case study, Arabic
assets/css/tokens.css                colour, type scale, spacing — light and dark
assets/css/base.css                  reset and element-level typography
assets/css/layout.css                masthead, shell, section grid, footer
assets/css/components.css            layer table, spec blocks, tiers, controls
assets/css/rtl.css                   Arabic fonts + direction fixes, loaded only by ar/
assets/js/theme.js                   theme toggle (18 lines)
assets/js/nav.js                     scrollspy for the nav (24 lines)
assets/pdf/                          both CVs (the editable .docx files live outside this repo)
```

One external request per page: Google Fonts. English loads Archivo, Newsreader
and IBM Plex Mono; Arabic loads IBM Plex Sans Arabic, Noto Naskh Arabic and IBM
Plex Mono. No icon library, no animation library, no analytics.

## Bilingual

Two real pages rather than a JavaScript toggle, so an Arabic link can be shared,
indexed, and read with JavaScript disabled. They are cross-linked with
`hreflang`, and each language's switch is labelled in its own script.

The layout stylesheets use logical properties (`padding-inline-start`,
`border-inline-end`, `text-align: start`), so direction mirrors on its own.
`rtl.css` only carries what logical properties cannot express: the Arabic font
stack, the mirrored `box-shadow` accent, and the typographic corrections Arabic
needs — no letter-spacing (it breaks cursive joining), no `text-transform`,
looser leading.

**Section ids stay in English** (`#work`, `#built`, `#stack`) in both pages on
purpose. Anchors keep working across languages and one `nav.js` serves both.

Both pages exist in both languages, and each links to its own-language CV.

## Two modes

Like a BIOS: easy mode is what you land on, advanced is one click away.

`/` is written so a non-technical reader can follow it. `/full/` is the same person
described for an engineer, and is the page the case study belongs to. They are
**different pages about the same subject, not translations of each other**, so they do
not list each other in `hreflang` — only the two language versions of each do.

There is one case study and it is technical only, so its URL does not encode a mode.
Its "Plain version" link goes to the simple home page.

Editing rule: a project description now lives in up to **four** files — plain and
technical, English and Arabic. The case study makes six pages in total.

The ER diagram and the interface sketch stay left-to-right on the Arabic pages.
Technical drawings conventionally do, and mirroring them would put the foreign
keys on the wrong side of the relationships.

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
