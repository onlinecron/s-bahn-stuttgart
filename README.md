# s-bahn-stuttgart

A small, flat, utilitarian design system in plain CSS. Named in honour of a nice looking train —
that is where the colours come from.

No shadows. No rounded corners. No gradients. No animation to speak of. Structure comes from 1px
charcoal rules; meaning comes from two signal colours.

> **Status: scaffold.** The design tokens are in place; the component CSS layer is being authored.
> See [Roadmap](#roadmap).

## Install

Zero build step. One stylesheet, no dependencies, no framework:

```html
<link rel="stylesheet" href="dist/s-bahn.css">
```

## Principles

- **Colour.** Page ground is grey `#E6E6E6`, never white — white is reserved for active content
  containers so the layering reads. Text is charcoal `#333333`. At most two saturated colours on a
  screen besides the neutrals.
- **Type.** Arimo throughout. Hierarchy comes from weight and colour, not size. Body is fixed at
  14px; labels are 12px bold uppercase with 0.04em tracking. Mono for times, IDs, cron and logs.
- **Spacing.** Everything is a multiple of 4px.
- **Borders.** 1px solid charcoal for cards, inputs and table outer edges; 1px hairline between
  table cells; 2px charcoal for dialogs; 2px signal blue for focus and active tabs.
- **Elevation.** None. `box-shadow` is not used. Depth is tonal: page grey → card white → grey
  section header.
- **Corners.** `--radius: 0px`. Everything.
- **Animation.** Effectively none — 80ms linear on background colour only. Loading is a text state,
  not a spinner.

## Two blues

The palette carries two blues with distinct jobs:

| Token | Value | Use |
| --- | --- | --- |
| `--blue-action` | `#006190` | Anything interactive — buttons, links, focus text. Clears 4.5:1 on white. |
| `--blue-signal` | `#0091d4` | Non-text signal elements only — active underlines, LEDs, board rules. Does **not** clear 4.5:1 for body text. |

## Tokens

Six files under `src/tokens/`, imported by `styles.css`:

| File | Contents |
| --- | --- |
| `colors.css` | base palette + semantic aliases (`--surface-*`, `--text-*`, `--action-*`, `--status-*`) |
| `typography.css` | type scale + the `.sb-headline-*`, `.sb-body-*`, `.sb-label-*`, `.sb-mono` classes |
| `spacing.css` | 4px scale, control heights, grid and page margins |
| `borders.css` | widths, focus outline, `--radius: 0px`, durations |
| `fonts.css` | Arimo via Google Fonts, plus the mono stack |
| `base.css` | reset, `body`, link and `:focus-visible` defaults |

Fonts are substituted: Arimo is loaded from Google Fonts. To self-host, drop the binaries in
`assets/fonts/` and replace the `@import` in `tokens/fonts.css` with `@font-face` rules.

## Responsive

Components that can be embedded at arbitrary width use **CSS container queries**, not viewport
media queries — a component inside a narrow modal on a wide screen adapts to *its own box*. Page
layout is the consumer's business.

## Iconography

No icon set is supplied and none is invented. Meaning is carried by shape and colour — the square
status LED, the coloured toast bar, the filled badge. Prefer adding a word over adding an icon.
Demos use plain unicode characters as placeholders. Emoji are never used.

## Roadmap

- [ ] Component CSS layer (`.sb-btn`, `.sb-card`, `.sb-table`, `.sb-input`, `.sb-badge`, `.sb-tag`,
      `.sb-led`, `.sb-dialog`, `.sb-navbar`, `.sb-tabs`, `.sb-toast`, `.sb-tooltip`)
- [ ] `.sb-table--stack` — the responsive table→card transform
- [ ] `dist/s-bahn.css` single-file bundle
- [ ] `demo/index.html` specimen page, desktop and mobile
- [ ] React reference bindings under `react/`

## Licence

MIT — see [LICENSE](LICENSE).
