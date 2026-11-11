# Sentinel Security Journal

## 2026-02-20 - Defense-in-Depth via Content Security Policy and Referrer Policy
**Vulnerability:** Missing Content Security Policy (CSP) and Referrer Policy in the single-page application allowed potential XSS exploitation, unauthorized script/resource loading, and leakage of sensitive referral headers.
**Learning:** Pure client-side single-page applications without custom backends rely on meta-tag-based CSP within `index.html`. External assets (Google Fonts, Google-hosted portfolio images at `https://lh3.googleusercontent.com`, and Gemini Generative AI endpoints at `https://generativelanguage.googleapis.com`) must be explicitly whitelisted in the directive list while keeping default fallbacks restricted to `'self'`.
**Prevention:** Always define restrictive CSP directives in `index.html` covering fonts, styles, images, and API connections, and enforce `strict-origin-when-cross-origin` referrer policy.
