# Applying to the site

Replace the `:root` block and the three font faces at the top of `index.html` with this, then swap the rules in the table.

```css
@font-face { font-family: 'ABC Areal'; src: url('fonts/ABCArealSuperfamilyVariable.ttf'); font-weight: 400 700; font-style: normal; }
:root {
  --ground: #EBF6FE; --tint: #D6EAFB; --rule: #9FC3E6;
  --ink: #0A1230; --ink-muted: #44506F;
  --primary: #072AC8; --primary-deep: #051C8C; --on-primary: #EBF6FE;
  --font-areal: 'ABC Areal', 'Helvetica Neue', Arial, sans-serif;
  --space-3: 16px; --space-4: 24px; --space-5: 40px; --space-6: 64px;
}
body { background: var(--ground); color: var(--ink); font-family: var(--font-areal); font-variation-settings: "MONO" 50; text-transform: lowercase; }
```

| current site | becomes |
| --- | --- |
| pink `#ED207C` and purple `#4F31FF` | `--primary` |
| neutral greys, `--border` | `--ink`, `--ink-muted`, `--rule` |
| `--radius-*`, `border-radius: 99px / 50%` | remove; `0` |
| `--shadow-*`, nav `backdrop-filter` | remove; flat `--ground` nav with a 2px `--primary` underline |
| `.chip`, `.post-tag` pills | square Tag with a 2px `--primary` outline |
| `.photo-ring`, `.status-dot` | square photo, no dot; write "open to opportunities" as a tag |
| `.social-link` boxed icons | text links |
| Gotham, Quarto italic, Gabarito | ABC Areal only; drop the italic `em` styling |
| centred hero | left aligned, single column |
| Google Fonts link | remove |
