# rich henson design system

Flat, square and lowercase. One blue on an ultra light ground, set in ABC Areal. Nothing is rounded, shadowed, gradient or pill shaped.

## Content fundamentals

- Write everything in lowercase: headings, buttons, tags, nav, names, proper nouns. Write "rich henson", "melbourne", "hubspot". Apply `text-transform: lowercase` on `body` as a safety net, but type the copy lowercase in the source.
- Speak in first person, plain and short. "i build systems." not "Systems builder".
- Numbers keep their digits and symbols: "27.1% open rate".
- No emoji. No exclamation marks. No em dashes; use a full stop or a comma.
- Buttons are verbs: "get in touch", "read post", "all posts".

## Visual foundations

- Colour: `ground` is the page. `ink` is text. `primary` is the only accent and is used for links, buttons, active states and large solid blocks. `tint` is for panels and hover rows. Use `rule` for hairlines. Do not introduce a second hue.
- Text pairs: `ink` and `ink-muted` on `ground` or `tint`; `primary` on `ground` or `tint`; `on-primary` on `primary` and `primary-deep`. All hold 4.5:1.
- Shape: `radius-none` everywhere. No pills, circles, avatars or round swatches. Photos and placeholders are squares. Status is a word, not a dot.
- Flat: no shadows, blur, gradients or translucency. Depth comes from a solid fill (`tint`, `primary`) or a line (`border-hairline` in `rule`, `border-strong` in `primary`).
- Type: set everything in the `areal` family. `display-xl` once per page, `display` for page titles, `heading` for sections and posts, `body` for reading, `body-small` for excerpts, `label` for tags, dates and section labels. Set the whole site in semi mono: `font-variation-settings: "MONO" 50` on `body`, for every text style. Do not use full mono or the proportional setting. Do not use italics.
- Spacing: build on `space-4` (24px). Sections are separated by `space-6` and a `border-hairline` rule in `rule`. Keep a `space-3` gutter at phone width.
- Layout: a single reading column up to 680px, left aligned. No centred hero.
- States: hover on a primary fill goes to `primary-deep`; hover on an outline fills with `primary` and text turns `on-primary`; hover on a row fills `tint`. Focus is a 2px `ink` outline with a 2px offset. Disabled is `tint` fill with `ink-muted` text. Nothing animates except colour changes, 120ms linear.
- Blocks: large solid `primary` or `ink` rectangles on the grid are the brand's decoration. Keep them to whole multiples of `space-4`.

## Iconography

No icon set. Use words. For direction, write the word ("read post") or use a plain arrow character in `label` size. Social links are text links, not boxed glyphs.

## Assets

Font: `fonts/ABCArealSuperfamilyVariable.woff2`, weight range 400 to 700, with MONO, slnt and DRKM axes. Load it with `@font-face` and keep a `Helvetica Neue, Arial, sans-serif` fallback. No logo: the name is set in `display` as plain lowercase type.

## Files

- `tokens.css`: all tokens as CSS custom properties, plus the `@font-face`. Link it first.
- `tokens.json`: the same tokens with usage notes.
- `components/<Name>/README.md` and `preview.html`: guidelines and a live example for each component. Open a preview in a browser to see it.
- `components/HomePage/preview.html`: the homepage built only from the system.
- `applying-to-the-site.md`: how to move `index.html` onto the system.
