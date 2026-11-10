# Sentinel Security Journal

## 2026-03-30 - Content Security Policy and Resource Integrity in Vite SPA
**Vulnerability:** The single-page application lacked a Content Security Policy (CSP), exposing the client-side app to XSS risks, malicious script injections, unauthorized connections, and untrusted asset loading. Additionally, Vite failed to build because the entrypoint in `index.html` pointed to `/src/main.tsx` while source files live directly in root (`/main.tsx`).
**Learning:** For static Vite SPAs communicating with external APIs (like Google Generative AI) and serving external media (Google user content images, Google fonts, Material Symbols), CSP directives must explicitly allow `img-src https://lh3.googleusercontent.com` and `connect-src https://generativelanguage.googleapis.com https://*.googleapis.com`, while avoiding broad permissions.
**Prevention:** Include a strict `<meta http-equiv="Content-Security-Policy">` in `index.html` configured for all required third-party endpoints and ensure correct root path mapping for script tags.
