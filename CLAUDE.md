# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio for Pranay Paul, deployed as a **GitHub Pages user site** at `https://paulzpranay97.github.io/` (repo `paulzpranay97/paulzpranay97.github.io`, `main` branch). Pushing to `main` publishes the live site — there is no build, bundler, or preview environment.

## Hard constraint: pure HTML + CSS, no JavaScript

The site is intentionally **zero-JavaScript**. There is no `index.js`, no framework, no external UI library. All interactivity is achieved with CSS-only techniques, and this constraint must be preserved:

- **Mobile hamburger menu** — a visually-hidden `<input type="checkbox" id="nav-toggle">` whose `:checked` state (via `~` sibling selectors) toggles the `.menu` panel, the animated hamburger→X icon, and a `.menu-backdrop`.
- **Projects "Live / Practice" tabs** — two `<input type="radio" name="project-tab">` (`#tab-live`, `#tab-practice`); `:checked ~ #live-projects` / `~ #practice-projects` shows the matching `.project-list`, and `<label>`s act as the clickable toggle buttons.
- **Hero role text** ("a Full Stack Developer" → ...) — a CSS `clip-path` typewriter cycle across `.role-1/2/3` keyframes (replaces the old typed.js).
- **Icons** — inline `<svg>` in the contact cards (replaces the old Font Awesome / Boxicons scripts). Skill icons are `<img>` from the devicon jsDelivr CDN.

If asked to add behavior that seems to need JS, reach for a checkbox/radio/`:target` CSS pattern first.

## Files

- `index.html` — the entire page. Sections in scroll order: `#home` (hero) → `#about` → "What I Bring" → `#experience` → Education → `#projects` → `#skills` → `#contact`. Contains SEO/OG/Twitter meta and a JSON-LD `Person` block in `<head>` (keep these in sync with content changes).
- `index.css` — all styling. Organized top-to-bottom by concern with banner comments (Tokens → Reset → Scroll progress → Ambient background → Reveal system → Section titles → Navigation → Buttons → Hero → About → ... → Responsive → Reduced motion).
- `images/` and `portimage/` — assets. `images/my-logo.png` is the nav logo; `images/pranay.jpg` is the hero/about photo. Many other files here are unused leftovers.
- `pranay_paul_resume_v1.pdf` — the resume linked from the nav, hero, and contact CTAs (`pranay_paul_resume.pdf` is an older unused copy).

## Animation architecture (the part that needs care)

Entrance and parallax effects use **CSS scroll-driven animations** (`animation-timeline: view()` and `scroll(root)`), each gated behind `@supports (animation-timeline: ...)`. The base rule (outside `@supports`) always leaves elements fully visible, so unsupported browsers (Firefox, older Safari) degrade to static, readable content.

Two rules that were the source of real bugs — do not regress them:

- **Reveal animation-range must complete in the `entry` phase** (`animation-range: entry 0% entry 100%`), *not* `cover X%`. Elements in the final screenful of the page can never scroll far enough to reach the `cover` phase, so a `cover`-based range leaves them frozen at their initial state — which for `.reveal-up` includes `filter: blur(6px)`, i.e. permanently blurry bottom content.
- **`overflow-x: hidden` is set on both `html` and `body`.** Reveal transforms (`translateX(±50px)`) overflow horizontally; clipping only on `body` is not honored by some mobile browsers, causing a horizontal-scroll / off-center gutter.

Other conventions:
- `--d` custom property on `.reveal-*` / card elements drives staggered `animation-delay`.
- `@media (prefers-reduced-motion: reduce)` collapses all animation/transition to ~0 and disables scroll-snap. Note: with the OS "Reduce Motion" setting on, the page will correctly appear static — that is expected, not a bug.
- The fixed nav (`#main-nav`, `position: fixed`) sits above scroll-snapping sections. `scroll-padding-top` + `.sticky-title { top }` are tuned to the nav height (~130px); changing nav height means updating both. A sticky nav (instead of fixed) combined with `scroll-snap-type` triggers a Chromium layout bug where the hero renders under the nav.

## Verifying changes

No test suite. Verify visually by serving the folder and checking in a browser (Chromium for scroll-driven animations):

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Always check both a desktop width and a narrow mobile width (~375–390px): the mobile menu, the alternating left/right reveals, and edge-to-edge/overflow behavior are where regressions show up. `git status` before assuming the live site reflects local edits — deploying requires committing and pushing to `main`.
