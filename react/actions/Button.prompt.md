Rectangular action button — use for every commit/cancel/run action; never round its corners.

```jsx
<Button variant="primary" onClick={run}>Fahrplan laden</Button>
```

Variants: `primary` (blue fill, white text), `secondary` (white fill, blue text), `attention` (signal yellow, charcoal text — destructive-adjacent warnings and "acknowledge" actions), `danger` (signal red), `ghost` (borderless, toolbars only). Sizes `sm|md|lg` map to 24/32/40px heights. `pressed` mimics a mechanical switch by darkening the fill.
