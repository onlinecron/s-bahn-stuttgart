Square LED for machine state in tables, headers and row gutters.

```jsx
<StatusLed status="running" />
<StatusLed status="pending" label={false} />
```
Blue = running, yellow = pending, charcoal = inactive, green = ok, red = error. Never a coloured dot — the square is the system's signal shape.
