---
date: 2024-03-20
authors:
  - sampleblog
categories:
  - Accessibility
  - Best Practices
tags:
  - accessibility
  - a11y
  - wcag
  - inclusive-design
description: >
  Accessibility is not a feature — it's a fundamental quality of good web
  development. This post covers the most impactful practices you can adopt today.
---

# Accessibility Best Practices for the Modern Web

The web is for everyone. Yet millions of people with disabilities encounter
barriers daily. The good news: most accessibility improvements are simple to
implement and benefit all users.

<!-- more -->

## Why Accessibility Matters

- **~16% of the world's population** has some form of disability (WHO)
- Screen readers, switch devices, and keyboard-only navigation are common tools
- Accessible sites tend to rank better in search engines
- Many countries have legal requirements (ADA, EN 301 549, etc.)
- Accessibility improvements often improve UX for everyone

## The Four WCAG Principles (POUR)

The [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) are
organised around four principles:

| Principle | Meaning |
|-----------|---------|
| **Perceivable** | Information must be presentable in ways users can perceive |
| **Operable** | Interface components must be operable by everyone |
| **Understandable** | Information and UI operation must be understandable |
| **Robust** | Content must be interpretable by assistive technologies |

## 1. Semantic HTML

Use the right element for the job. Browsers and assistive technologies
understand semantic HTML natively:

```html
<!-- ❌ Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- ✅ Good -->
<button type="submit">Submit</button>
```

Use landmark elements: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`.

## 2. Colour Contrast

Text must have sufficient contrast against its background:

- **Normal text** (< 18pt): minimum 4.5:1 ratio
- **Large text** (≥ 18pt or 14pt bold): minimum 3:1 ratio
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify

## 3. Keyboard Navigation

Every interactive element must be reachable and operable with a keyboard:

```css
/* Never hide the focus ring entirely */
:focus-visible {
  outline: 3px solid #a855f7;
  outline-offset: 3px;
  border-radius: 3px;
}
```

Provide a **skip link** so keyboard users can jump past the navigation:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## 4. Alternative Text

Every image needs a text alternative:

```html
<!-- Informative image -->
<img src="chart.png" alt="Bar chart showing 40% increase in Q4 sales">

<!-- Decorative image -->
<img src="divider.svg" alt="" aria-hidden="true">
```

## 5. Form Labels

Always associate labels with form controls:

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" autocomplete="email">
```

Never use placeholder text as a substitute for a label.

## 6. ARIA — Use Sparingly

ARIA attributes fill gaps where semantic HTML isn't enough:

```html
<!-- Live region for dynamic updates -->
<div role="alert" aria-live="polite" id="form-message"></div>

<!-- Progress indicator -->
<div role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
  45%
</div>
```

!!! tip "First rule of ARIA"
    If you can use a native HTML element with the behaviour built in, do that
    instead of adding ARIA to a generic element.

## 7. Respecting User Preferences

```css
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .card {
    border: 2px solid currentColor;
  }
}
```

## Testing Your Site

1. **Keyboard test** — unplug your mouse and navigate with Tab/Enter/Space/Arrow keys
2. **Screen reader test** — NVDA (Windows, free), VoiceOver (macOS/iOS, built-in), TalkBack (Android)
3. **Automated scan** — [axe DevTools](https://www.deque.com/axe/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
4. **Colour contrast** — [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
5. **User testing** — involve people with disabilities in your process

## Further Resources

- [WebAIM](https://webaim.org/) — comprehensive accessibility guidance
- [A11y Project](https://www.a11yproject.com/) — community-driven patterns
- [Inclusive Components](https://inclusive-components.design/) — accessible component patterns

Accessibility is a journey, not a destination. Start small, test often, and
keep improving. 🌏
