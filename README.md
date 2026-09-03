# s-bahn-stuttgart

A small, flat, utilitarian design system in plain CSS. Named in honour of a nice looking train —
that is where the colours come from.

No shadows. No rounded corners. No gradients. No animation to speak of. Structure comes from 1px
charcoal rules; meaning comes from two signal colours.

- **No build step.** One stylesheet, no dependencies, no framework, no preprocessor.
- **Container-query aware.** Components adapt to the width of their own box, not the viewport.
- **~30 KB** unminified, and readable.

## Install

```html
<link rel="stylesheet" href="dist/s-bahn.css">
```

Or from npm:

```sh
npm install s-bahn-stuttgart
```

To rebuild `dist/s-bahn.css` after editing anything in `src/`:

```sh
./build.sh
```

`demo/index.html` is the specimen page — open it in a browser to see everything at once.

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
- **Corners.** `--radius: 0px`. Everything. The single exception is the dot inside a radio control.
- **Animation.** Effectively none — 80ms linear on background colour only. Loading is a text state,
  not a spinner.

## Two blues

The palette carries two blues with distinct jobs:

| Token | Value | Use |
| --- | --- | --- |
| `--blue-action` | `#006190` | Anything interactive — buttons, links, focus text. Clears 4.5:1 on white. |
| `--blue-signal` | `#0091d4` | Non-text signal elements only — active underlines, LEDs, board rules. Does **not** clear 4.5:1 for body text. |

## Tokens

Six files under `src/tokens/`:

| File | Contents |
| --- | --- |
| `colors.css` | base palette + semantic aliases (`--surface-*`, `--text-*`, `--action-*`, `--status-*`) |
| `typography.css` | type scale + the `.sb-headline-*`, `.sb-body-*`, `.sb-label-*`, `.sb-mono` classes |
| `spacing.css` | 4px scale, control heights, grid and page margins |
| `borders.css` | widths, focus outline, `--radius: 0px`, durations |
| `fonts.css` | Arimo via Google Fonts, plus the mono stack |
| `base.css` | reset, `body`, link and `:focus-visible` defaults |

The `.sb-headline-*`, `.sb-body-*`, `.sb-label-*` and `.sb-mono` classes all set `margin: 0`
deliberately — a type class should set type, not inject vertical space you did not ask for.
Spacing is the page's job.

Note that a class beats a bare element selector on specificity, so `h2 { margin-bottom: 1rem }`
loses silently to `.sb-headline-sm`. Scope your own rule to a container (`.prose h2`) or use a
class of your own.

Fonts are substituted: Arimo is loaded from Google Fonts. To self-host, drop the binaries in
`assets/fonts/` and replace the `@import` in `tokens/fonts.css` with `@font-face` rules.

## Components

Block classes, with `--modifier` suffixes. All are plain CSS — no JavaScript is required for any
of them except where noted.

| Group | Classes |
| --- | --- |
| `actions` | `.sb-btn` (`--primary --secondary --attention --danger --ghost`, `--sm --lg --block`), `.sb-icon-btn` |
| `forms` | `.sb-field`, `.sb-input` (+ `__control __affix`), `.sb-select`, `.sb-check` (+ `--radio`), `.sb-switch` |
| `containers` | `.sb-card` (+ `__header __title __meta __actions __body`, `__body--flush`), `.sb-dialog` (+ `__panel __header __body __footer`) |
| `data` | `.sb-table` (+ `--zebra --dense --stack`), `.sb-table-wrap`, `.sb-badge`, `.sb-tag`, `.sb-led` |
| `feedback` | `.sb-toast` (+ `--ok --error --attention`), `.sb-toast-stack`, `.sb-tooltip` |
| `navigation` | `.sb-navbar` (+ `--sticky`), `.sb-tabs` |

State is read from real attributes rather than extra classes wherever possible — `:disabled`,
`:checked`, `aria-selected`, `aria-current`, `aria-pressed` — so the markup stays accessible by
construction.

### Responsive behaviour

Components use **container queries**, not viewport media queries. A card inside a narrow sidebar
behaves like a card on a phone, and a component in a narrow modal on a wide desktop adapts
correctly. Page-level layout is the consumer's business and can use ordinary media queries.

Touch-target minimums are keyed on `@media (pointer: coarse)` rather than viewport width: a tablet
in landscape needs the larger target, a narrow desktop window does not.

### `.sb-table--stack`

A table cannot be squeezed below roughly 560px and stay readable, so `.sb-table--stack` turns each
row into a stacked block below that. This is the single most useful thing in the library if you
are building anything table-dense.

It needs an ancestor that establishes a container — either `.sb-table-wrap` or any `.sb-card`.
Without one the query never matches and the table simply scrolls instead, which is a safe fallback.

Each `<tr>` becomes a two-column grid. Cells take a full-width line each, labelled from
`data-label`. Opt a pair of cells onto one shared line with `.sb-cell--start` / `.sb-cell--end`:

```html
<div class="sb-table-wrap">
  <table class="sb-table sb-table--stack sb-table--zebra">
    <thead><tr><th>Job</th><th>Status</th><th>Endpoint</th></tr></thead>
    <tbody>
      <tr>
        <td class="sb-cell--start">invoice-sweep</td>
        <td class="sb-cell--end"><span class="sb-badge sb-badge--ok">OK</span></td>
        <td class="sb-cell--mono" data-label="Endpoint">POST api.example.dev/cron/invoices</td>
      </tr>
    </tbody>
  </table>
</div>
```

Wide, that is an ordinary three-column table. Narrow, it reads:

```
invoice-sweep                    [OK]
ENDPOINT
POST api.example.dev/cron/invoices
```

The header row is hidden from sight but kept for screen readers, and zebra striping survives as an
alternating block fill.

## React

`react/` holds the original React bindings as a reference implementation — useful for reading the
exact token usage per component. They are not the supported distribution; the CSS is.

## Iconography

No icon set is supplied and none is invented. Meaning is carried by shape and colour — the square
status LED, the coloured toast bar, the filled badge. Prefer adding a word over adding an icon.
Demos use plain unicode characters as placeholders. Emoji are never used.

## Licence

MIT — see [LICENSE](LICENSE).
