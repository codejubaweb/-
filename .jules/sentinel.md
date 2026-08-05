# Sentinel Security Journal

This journal records critical security learnings, vulnerability patterns, and defense mechanisms for this project.

## 2025-08-05 - Frame-Busting and Content Security Policy (CSP) for Production builds
**Vulnerability:** Clickjacking risk (framing) and potential Cross-Site Scripting (XSS) / injection of unauthorized assets on static sites.
**Learning:** For a single-page app containing no backend server, security headers (like Content-Security-Policy or X-Frame-Options) cannot easily be sent via server responses because the site is hosted on a static file server or CDN.
**Prevention:** We can use an inline frame-busting script and custom Content-Security-Policy meta tag injected dynamically into `index.html` during the build process (`vite build`) using a custom plugin in `vite.config.ts`. This protects production assets without disrupting dev environments.
