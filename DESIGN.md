# Tafoukt design system

## Direction

Tafoukt is a community association, not a tech product. The interface should feel local, credible and made with care: a warm editorial page, clear public information and the official emblem treated like a real printed object.

Three words guide every design decision: **rooted, useful, accountable**.

## Principles

1. **Real before decorative.** Use verified copy, the official emblem and real project media. Never use stock photos as if they documented an association activity.
2. **Editorial before dashboard.** Prefer generous type, ruled sections and readable lists over repeated floating cards, gradients or glass effects.
3. **Warm, not childish.** Gold brings energy; navy brings trust; paper tones keep the experience human.
4. **Motion with purpose.** Animation helps establish reading order and feedback. It must never delay access to information.
5. **French and Arabic are equal.** Every component must work in both directions without changing the information hierarchy.

## Foundations

### Color

| Token            | Value                    | Use                                           |
| ---------------- | ------------------------ | --------------------------------------------- |
| `--navy`         | `#111936`                | Primary text, dark fields and footer          |
| `--navy-soft`    | `#202b50`                | Hover and secondary dark surfaces             |
| `--gold`         | `#f3bd22`                | Emphasis, active states and signature details |
| `--gold-deep`    | `#b98509`                | Gold text on light backgrounds                |
| `--paper`        | `#faf7ef`                | Main page background                          |
| `--paper-bright` | `#fffdf8`                | Raised paper surfaces                         |
| `--cream`        | `#eee9dc`                | Section contrast                              |
| `--ink-soft`     | `#4e5362`                | Long-form secondary text                      |
| `--line`         | `rgba(17, 25, 54, 0.16)` | Rules, dividers and field borders             |

Gold text must use `--gold-deep` on light surfaces. Use bright gold for decoration or against navy.

### Typography

- **Newsreader:** display headings, project names and editorial statements in French/Latin text.
- **Manrope:** navigation, labels, buttons and body copy.
- **Noto Sans Arabic:** all Arabic text, including display headings.
- Hero headings use a compact line-height around `0.94`; body copy stays between `1.65` and `1.8`.
- Avoid all-caps outside short labels. Never use decorative type for paragraphs.

### Shape and depth

- Small controls: `8px` radius.
- Information panels: square or near-square edges.
- The circular form is reserved for the emblem, people and small numbered markers.
- Use crisp offset shadows to evoke print. Avoid generic blurred card shadows and glassmorphism.

### Spacing

- Page gutters: `clamp(24px, 6vw, 96px)`.
- Major sections: `88–132px` vertically on desktop, `76px` on mobile.
- Keep long paragraphs under roughly `650px`.
- A section should have one primary reading path, with no more than two aligned columns of prose.

## Components

### Header

Sticky, compact and paper-colored. The emblem and wordmark lead; navigation stays text-first. The primary support action may use navy with the offset gold shadow.

### Buttons and links

- Primary buttons are rectangular with a small radius and a directional arrow.
- On hover, the button and its shadow move together by two pixels.
- Secondary actions use an underlined text link, not another filled button.
- Labels are verbs and describe the destination.

### Cards and lists

- Use cards only when the content is genuinely a separate object, such as a project.
- Related actions or people use ruled lists, not a wall of rounded containers.
- Numbers establish sequence; icons support recognition but never replace labels.

### Project imagery

Until approved photographs exist, use explicitly graphic placeholders based on the brand palette. Once real photographs are supplied, preserve their documentary character and add factual captions and alt text.

## Motion

Framer Motion handles entrance and scroll reveals.

- Standard reveal: opacity `0 → 1`, vertical offset `24px → 0`, `650ms`.
- Section stagger: `80ms` between siblings.
- Hero poster: one gentle entrance and a maximum static rotation of two degrees.
- Hover movement: no more than four pixels.
- Viewport animations run once.
- `MotionConfig reducedMotion="user"` is mandatory so operating-system preferences are respected.
- Never animate layout in a way that moves focused controls or causes cumulative layout shift.

## Responsive and RTL

- At `1050px`, the hero and dense content move to one column.
- At `800px`, content grids collapse progressively.
- At `640px`, touch targets stay at least `42px`; actions may stack.
- Use logical reading order in the markup. RTL overrides should change alignment or placement only, never duplicate content.

## Accessibility

- Preserve the skip link and visible `:focus-visible` treatment.
- Decorative graphics use `aria-hidden="true"`; informative images need localized alt text.
- All text and controls must meet WCAG AA contrast.
- Do not communicate status by color alone.
- Interactive motion must follow the reduced-motion preference.

## Content integrity

- Do not invent impact figures, contact information, partners, dates or project progress.
- Use “à compléter” states openly where official information is unavailable.
- Any future contribution or payment flow requires approved legal, privacy and accounting information before activation.
