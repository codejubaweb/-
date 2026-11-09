# Sentinel Security Journal

## 2026-03-30 - Content Security Policy & Entrypoint Integrity
**Vulnerability:** Missing Content Security Policy (CSP) headers or meta directives allowed arbitrary resource loading, potential inline script injections, and untrusted cross-origin connections. Additionally, the entrypoint script path was mismatched with Vite's bundler root resolution.
**Learning:** Pure frontend Single-Page Applications deployed without an edge server header injector require a defensive `<meta http-equiv="Content-Security-Policy">` configuration within `index.html` to enforce least-privilege resource loading for fonts, images (`lh3.googleusercontent.com`), and backend/Gemini endpoints (`generativelanguage.googleapis.com`).
**Prevention:** Always define strict CSP rules in `index.html` and verify Vite entry points match the physical filesystem structure.
