Text field. Label sits above in `label-bold`; focus is a 2px blue border, never a glow.

```jsx
<Input label="Cron-Ausdruck" mono defaultValue="*/5 * * * *" hint="UTC" />
```

Use `mono` for machine data, `prefix`/`suffix` for units, `error` for validation (2px red border).
