# Sentinel Security Journal

## 2026-03-30 - Client-Side Security Headers in Static Vite Single-Page Applications
**Vulnerability:** Lack of basic browser defense-in-depth security policies (CSP, referrer policy, MIME sniffing protection) in static React single-page apps.
**Learning:** In purely static single-page applications without custom reverse proxies or web server headers, browser security policies must be embedded directly in `index.html` via `<meta>` tags (`Content-Security-Policy`, `Referrer-Policy`, `X-Content-Type-Options`). Note that `frame-ancestors` directive is ignored by browsers in HTML `<meta>` CSP tags and must be omitted or sent via HTTP header.
**Prevention:** Always declare base CSP rules, referrer policy, and `nosniff` meta headers in `index.html` when deploying client-only Vite/React applications.
