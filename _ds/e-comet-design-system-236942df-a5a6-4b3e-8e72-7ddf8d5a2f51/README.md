# e-Comet Design System

**e-Comet** is a premium bidder and advertising analytics platform for Wildberries (RU marketplace). The app helps sellers and marketers manage ad campaigns, monitor keywords and niches, analyze orders and competitors, and run A/B tests.

Marketing one-liner (from `<meta>` tags):

> e-Comet — аналитика и управление рекламой на Wildberries.
> Управление рекламой. Анализ ниш и конкурентов. Мониторинг ключевых фраз и категорий.

The product is a dense, data-heavy web SaaS — an AG Grid–powered analytics cabinet with sidebars, modals, charts, and a configuration-heavy bid engine. It ships in Russian only and runs in light + dark themes. The brand personality is pragmatic and slightly playful: a comet (in orange + yellow) cutting across a dark-blue sky. Utilitarian workspace chrome, bright accent color reserved for CTAs and the logo.

---

## Products represented

1. **e-Comet Cabinet** — the primary React SPA. An analytics + automation dashboard for Wildberries sellers. Pages include:
   - `ads` — ad campaigns (Реклама)
   - `briefcase` — portfolio (Портфель)
   - `keywords` — keyword monitoring (Фразы)
   - `orders-list` — orders feed (Лента)
   - `feedback` — reviews (Отзывы)
   - `ab-tests` — A/B tests
   - `admin` — admin panel
   - `login` / `onboarding` / `account` / `product` pages
2. **Chrome Browser Extension** — referenced in the header (`chrome.google.com/webstore/detail/e-comet/…`). Not in this codebase but part of the surface area.

Only the cabinet's frontend is in this design system. No marketing website or mobile app source was supplied.

## Sources given

- **Codebase:** `front/` (external mount) — React 18 + TypeScript + Vite + SCSS (BEM via `bem-cn-lite`) + Effector + Bootstrap 5 + AG Grid + react-i18next. See `front/AGENTS.md` for engineering conventions.
- **Uploads:** `uploads/logo.png`, `uploads/logoC.png`, `uploads/logoDark2.webp`, `uploads/logoLight.png` — brand logos.

No Figma, no slides, no marketing site were attached.

---

## Index of this design system

```
README.md                  — this file
SKILL.md                   — entry point for Claude / Claude Code skill invocation
Регламент.md               — frontend regulation (§2.1.3 + §2.3 style guide, text/i18n rules, compliance checklist)
colors_and_type.css        — CSS variables: palette, semantic tokens, type scale
fonts/                     — (Nunito is loaded from Google Fonts — see note below)
assets/                    — logos, comet mark, icons, backgrounds
  logoLight.(png|svg)      — full wordmark on light bg (orange comet + grey "e‑Comet")
  logoDark.(png|svg)       — full wordmark on dark bg
  logoDark2.webp           — large orange gradient comet mark
  logoC.png                — square comet-only mark (used at <1300px viewport)
  logoBetaLight/Dark.svg   — "beta" variants
  comet.svg                — raw two-tone comet SVG
  background.svg           — decorative background art
  favicon.ico
  icons/                   — common SVG icons lifted from the cabinet
preview/                   — registered design-system cards (Type, Colors, Spacing, Components, Brand)
ui_kits/
  cabinet/                 — React JSX recreation of the e-Comet cabinet UI
    index.html             — interactive clickthrough
    README.md              — per-kit notes
    *.jsx                  — Header, Sidebar, Button, Card, DataTable, LoginCard, …
```

---

## CONTENT FUNDAMENTALS

### Voice & tone
- **Language:** Russian only. UI is not localized to other languages; all copy lives in `front/src/shared/i18n/ru/*.json`.
- **Register:** formal-polite "вы" (lowercase). The product speaks to a professional seller/marketer, not a consumer. Imperative is used for actions ("Войти", "Повторить отправку", "Вернуться в кабинет") — short, direct, no flourishes.
- **Tone:** pragmatic, workmanlike, occasional light touches. Example: the free-call instruction card reads `💡 Звонок абсолютно бесплатный` and `📱 После звонка вернитесь в браузер` — sparing, purposeful emoji used as a hint/icon, never as decoration.
- **Casing:** Russian sentence case. No Title Case. Buttons are one or two words, capitalized only at the start ("Войти", "Восстановить доступ", "Сравнить").
- **Punctuation:** No trailing periods on single-sentence button/label strings (codebase rule in `AGENTS.md`). Periods only between sentences inside multi-sentence copy. Typographic comparison: `≥ 100`, `≤ 500`, never `>= 100`. Em-dash with spaces. Non-breaking spaces are used generously (`От\u00A0{{min}}\u00A0до\u00A0{{max}}`) to avoid orphaned numerals.
- **Bold:** `<strong>` preferred over `<b>` (codebase rule).

### Vocabulary
Common domain terms you should reproduce verbatim:
- `Реклама`, `Портфель`, `Фразы`, `Лента`, `Отзывы`, `А/Б-тесты` — top-level nav
- `РК` — abbreviation for рекламная кампания (ad campaign)
- `Селлер`, `Менеджер`, `Токен API`
- `Основной период` / `Сравнительный период`
- `МСК` — Moscow time
- `Нет данных` — empty-state for tables/charts
- `Баланс`, `Тариф`, `Промокод`
- `e-Comet.io` — always hyphenated, always lowercase `e`.

### Copy examples (verbatim from `auth.json`)
- CTA: **"Войти или зарегистрироваться"**
- Confirmation: **"Вы можете потерять введённые изменения. Вы уверены?"**
- Hint card: **"💡 Звонок абсолютно бесплатный"** / **"Трубка снята не будет — мы просто зафиксируем ваш входящий звонок для подтверждения"**
- Error body: **"Не удалось создать аккаунт"** (heading) + plain-paragraph explanation + FAQ-style Q/A blocks.
- Legal: **"Нажимая 'Войти', вы соглашаетесь с <oferta>офертой</oferta> и <privacy>политикой конфиденциальности</privacy>"** — legal strings use inline `<Trans>` components for links.

### Emoji policy
Very light, informational only. Observed: `⚡` (used as `common.unicode.flash` for bonus/energy indicators), `💡`, `📱`. Never in headlines, never decorative. When unsure, don't.

---

## VISUAL FOUNDATIONS

### Colors
The system is a Bootstrap 5 custom theme with two modes, driven by `[data-bs-theme="light|dark"]` on `<html>`.

**Brand / signature**
- `--e-comet-garnet` `#F04527` — the fiery comet red, the brand CTA accent (used for alerts, the loader gradient, special buttons)
- `--secondary` `#F0BC74` — warm yellow-orange (buttons, the comet's glow)
- `--yellow-logo` `#FFCE54`, `--red-logo` `#E9573F` — the two tones of the comet mark itself
- `--reddish-orange` `#B56746`, `--reddish-orange-300` `#FF9066` — dark-mode tints of the brand color

**Primary surface / foreground (light)**
- `--primary-dark-blue` `#2C3046` — the cabinet's signature deep navy. Used as the header background, primary text, and `btn-primary` fill in light mode.
- `--light-gray-blue` `#F5F8FB` — the page/body background
- `--white` `#FFFFFF` — cards/surfaces
- `--border-gray` `#C4C4C4`, `--gray-200` `#DCDCDE`, `--gray` `#9A9A9A`

**Dark mode surfaces**
- `--very-dark-blue` `#0E0E10` — body background
- `--very-dark-gray` `#1F1F23` — secondary surface
- `--very-dark-gray-800` `#2C2C30` — tertiary surface / popover
- `--dark-gray-2` `#18181B` — header background
- `--dark-gray-3` `#3A3A3F` — borders
- `--grayish-white` `#EFEFF1` — primary text
- `--cell-white` `#BBBAC0` — secondary text

**Semantic**
- `--success` `#10B981` (tag-success `#0FBA81`)
- `--warning` `#FBA918` (tag-warning `#D59A06`)
- `--danger` `#E11D48`
- `--blue` `#1E90FF` / `--accent-blue` `#2361CE` — informational / links
- **Rating colors (1–5):** `#AD0C00 → #FF3300 → #ECA94B → #5292E7 → #19C296` — used on rating cells.

Dark-mode `btn-primary` notably *inverts the pattern*: background is **transparent** with a 1px `--reddish-orange` border and white text. This is an intentional quirk — adopt it if you recreate dark buttons.

### Typography
- **Font family:** `Nunito` (primary UI), with `Roboto` as a secondary (loaded but rarely used). Fallback stack: `Nunito, Arial, Helvetica, sans-serif`.
- Loaded from Google Fonts: `Nunito: 400, 500, 700` and `Roboto: 400, 500, 700`.
- Body: 14px / 18px, weight 400. The type scale is compact by design — this is a data application, not an article.
- Global classes (prefix `font-`):
  - `.font-details-accent` 12/16, 400
  - `.font-main` 14/18, 400  ← body default
  - `.font-accent` 16/24, 400
  - `.font-block-heading` 20/28, 400 (responsive → 18/22 below 700px)
  - `.font-accent-bold` 16/24, 700
  - `.font-block-heading-bold` 20/28, 700
  - `.page-title` 20/28
  - `.card-title` 16/24, 700
- **Font weights in practice:** 400 body, 500 for `font-weight-md`, 600 for `btn` + `.font-weight-bold`, 700 for headings and `font-weight-bolder`.
- **Links:** `.font-link` uses a `1px dashed` underline (30% opacity of primary) that goes solid-color on hover. Underlines are dashed — this is a distinctive e-Comet touch and recurs throughout.

### Spacing
Bootstrap's spacer scale (`0.25rem` steps). No custom spacing tokens were introduced — the codebase leans on Bootstrap utility classes (`p-2`, `gap-3`, `mt-4`, etc.) and BEM-scoped SCSS with hard-coded px for component internals.

Common gaps observed: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `40px`. `gap: 24px` on the header top bar, `gap: 16px` inside forms, `gap: 8px` within a control group.

### Radii
- `--bs-border-radius` `0.5rem` (8px) — the default for almost everything
- `--bs-border-radius-sm` `0.5rem` — deliberately the same; no micro-radius
- Modals and cards: 8px
- Popovers: 8px with `box-shadow: var(--popup-shadow)`
- Pill-shaped elements (rating, tags): `border-radius: 50%` for small status dots (`.round-status:before` is a 9px circle)

### Shadows
Two systems, swapped by theme:
- **Light popover:** `0 0 1rem rgba(46, 54, 80, 0.5)` — a soft navy-tinted glow, no directionality.
- **Light modal:** `0 6px 16px rgba(0,0,0,0.16), 0 0 4px rgba(0,0,0,0.05)` — two-layer elevation.
- **Header:** `box-shadow: 0 2px 4px rgba(0,0,0,0.5)` — heavy bottom-edge shadow (the header floats above the page content).
- **Dark popover:** `0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.4)` — similar feel, heavier.
- **Dark modal:** `0 6px 16px rgba(0,0,0,0.5), 0 0 4px rgba(0,0,0,0.4)`.

Use these CSS vars: `--popup-shadow`, `--modal-shadow`.

### Borders
Thin, functional `1px solid`. Light-mode border uses `--border-gray` (#C4C4C4); dark-mode uses `--dark-gray-3` (#3A3A3F). Inputs get an explicit `1px solid var(--border-gray)` in light mode. No colored borders for decoration — borders are structural.

### Backgrounds
No gradients or illustrations on content surfaces. The only gradient in the whole UI is the **loader progress bar** — `linear-gradient(90deg, #F04527 0%, #FF9066 50%, #F0BC74 100%)` — a three-stop warm sweep that mirrors the comet tail, with a bouncing translate animation. There's also a darker gradient comet in `logoDark2.webp` used on the loader. No patterns, no textures, no repeating motifs. Surfaces are flat.

### Hover states
- Buttons: Bootstrap's standard `shade-color(..., 10%)` darkening for the fill + 12% for border. In dark mode, buttons tint the transparent fill with a shaded reddish-orange.
- Icon buttons (header action icons): `color: var(--secondary)` on hover — the warm yellow-orange — and `svg { opacity: 0.9 → 1 }` transition.
- Back button (header): `background-color: rgba(255,255,255,0.1)` (10% white tint on the dark header)
- Dropdown items: `--bs-dropdown-link-hover-bg: var(--hover-bg-2)` (light: `#E0E0E0`, dark: `rgba(83,83,95,0.48)`)
- Link hover: the dashed underline becomes solid (`border-bottom: 1px dashed var(--primary)`).

### Press / active states
- `--active-bg-2` — `#D9D8D8` (light) / `rgba(83,83,95,0.55)` (dark). Slightly darker than hover.
- Buttons use Bootstrap's standard active-state darkening (20% / 24% shade).
- No scale/shrink animations on press — very static.

### Animations
- Minimal and functional. The one glowing exception: `.btn-animate:not(:disabled)` gets a `blinking-glow` mixin (found in `animations/animations.mixins.scss`) used for the save button.
- Loader: infinite 2s `cubic-bezier(0.4, 0, 0.2, 1)` translateX loop on the progress bar.
- Transitions: `opacity 0.2s ease` on icon buttons, `background-color 0.2s` on the header back button. Short, linear-ish, no bounces.

### Transparency & blur
- Transparent fills on dark-mode buttons are the primary use of transparency.
- **Modal backdrop** is heavy: `rgba(0,0,0,0.85)` — darker than Bootstrap default, focuses attention hard.
- `--hover-bg` (light) `#FFFFFF40` — 25% white tint for hover on dark surfaces (e.g. logo area).
- Backdrop-filter/blur: not used. Surfaces are solid.

### Cards
- `--bs-card-bg: white` (light) / `--very-dark-gray` (dark)
- `border-radius: 8px`, `border: 0` in dark mode (relies on the darker surface to separate), `border: 1px solid var(--border-color)` in light
- Card headers: `padding: 16px 16px 8px 16px`, `border-bottom: 0` when inside `.page-content`, `--bs-card-cap-bg: white` in light, `--very-dark-gray` in dark
- Titles inside cards: `.card-title` 16/24, weight 700.

### Icons & imagery
See the ICONOGRAPHY section below. Imagery in the cabinet is product imagery (Wildberries product photos via URL), not editorial illustration. No photography, no illustration system of e-Comet's own.

### Layout rules
- Fixed top header, 50px tall, dark-blue (`--header-background` = `--primary-dark-blue` light / `--dark-gray-2` dark). Full-width. `box-shadow` beneath it.
- Below the header, content lives in a light-gray-blue (`--light-gray-blue`) or very-dark-blue (`--very-dark-blue`) body, padded, with full-width card rows.
- Breakpoints referenced in CSS: `400px`, `480px`, `700px` (mobile), `850px`, `991px`, `1000px`, `1260px`, `1300px`, `1500px` (logo shrinks to comet-only). Desktop-first codebase.
- Modals: up to `--bs-modal-width: calc(100% - 42px)` for full-width; `big-modal` gets `max-width: 1640px, width: 95vw`. This is a wide-screen data app.
- `.page-title` is 20/28; `.card-title` is 16/24. No hero units, no marketing spacing.

---

## ICONOGRAPHY

**Approach.** e-Comet uses `react-icons` (primarily `Fa*` — Font Awesome 5 via the `fa` package) as its icon system, with a handful of product-specific SVGs copied into `front/src/shared/assets/images/*.svg`. Icons are always monochrome, stroke-via-fill, and colored via `color` / CSS variables.

**Concrete set (copied into `assets/icons/`):**
- `bell.svg`, `burger.svg`, `envelope.svg` / `envelope-fill.svg`, `envelope-exclamation.svg` / `envelope-exclamation-fill.svg`, `exclamation-circle.svg` / `exclamation-circle-fill.svg`, `exit.svg`, `notification.svg`, `question.svg`, `user.svg`, `sort-down.svg` / `sort-down-white.svg`, `feedbacks.svg`, `wb-icon.svg`, `wb.png`.
- **Logo + brand marks:** `logoLight.svg`, `logoDark.svg`, `logoBetaLight.svg`, `logoBetaDark.svg`, `logo*.png`, `logoDark2.webp`, `logoC.png` (square comet), `comet.svg`.
- **Icon component:** `WbIcon.tsx` (Wildberries brand icon inline), `chart-line-with-number.tsx`.

**react-icons usage (observed):**
- `FaArrowLeft`, `FaBook`, `FaChrome`, `FaComment`, `FaSearch` — used in the header alone.
- Package `react-icons` version ^5.5.0 is a dependency; the full Font Awesome + Material + Ionicons + Lucide + Bootstrap Icons sets are all available to this codebase. Default stroke style is Font Awesome's solid variant (`Fa*`).

**Emoji as icons.** Extremely sparing — `⚡` as a stored `common.unicode.flash` token, `💡` and `📱` as informational bullets in copy. Never in buttons, never in nav.

**Unicode chars.** Non-breaking spaces are part of the typography system (`\u00A0`). Typographic operators `≥`, `≤` replace ASCII (`>=`, `<=`). Currency: `₽` after amounts.

**For recreations in this design system:**
Use the copied SVGs in `assets/icons/` when possible. For anything else, **use `react-icons` via CDN** (matching the codebase's choice) — in particular the `fa` / `fa6` packages. Do not hand-roll new SVGs or substitute a different icon family (Lucide, Heroicons) unless called out — `Fa*` is the canonical e-Comet look.

---

## Notes & substitutions

- **Fonts:** Nunito is loaded from Google Fonts (`https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700`) — no local `.woff2` files were shipped in the codebase. This design system loads from the same Google Fonts URL. If you need fully-offline assets, ask the user to attach Nunito's font files and drop them in `fonts/`.
- **Icons:** shipping from the codebase's own SVG copies + `react-icons` CDN. No substitution needed.
- **No Figma, no slides** were provided — this design system is built entirely from the React/SCSS codebase and the four uploaded logo files.

---

## See also
- `Регламент.md` — frontend regulation (§2.1.3 + §2.3 style guide, text/i18n typography, compliance checklist)
- `SKILL.md` — how to use this design system as a Claude / Claude Code skill
- `ui_kits/cabinet/README.md` — details about the cabinet UI kit
- `colors_and_type.css` — CSS variables you can drop into any prototype
