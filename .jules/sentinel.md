# Sentinel Security Journal

## 2025-09-30 - SPA Content Security Policy & Vite Entry Resolution
**Vulnerability:** External script execution risks, reverse tabnabbing via untrusted external links, and Vite HTML build failure when entry scripts point to non-existent `/src` subdirectories.
**Learning:** In Vite client-only projects, referencing `/src/main.tsx` when `main.tsx` lives at the root causes Vite build failures. Standardizing HTML Content-Security-Policy meta tags ensures defense-in-depth against XSS while permitting necessary Google Fonts and image domains. Adding `rel="noopener noreferrer"` to external links prevents `window.opener` exploitation.
**Prevention:** Always verify entry point file paths in `index.html` matches disk structure, enforce CSP rules via HTML meta tags for SPA frontend applications, and validate `target="_blank"` links include `rel="noopener noreferrer"`.
