# Sentinel Security Journal

## 2025-05-10 - Content Security Policy & Client-side Script Entry Fix
**Vulnerability:** Lack of Content Security Policy allowed potential XSS/unauthorized resource loading, and invalid script entry path caused build failures.
**Learning:** Pure SPA React applications serving external assets (fonts, user content images) require explicit source permissions in CSP while keeping Vite entry paths accurately aligned with root layout.
**Prevention:** Always define restrictive CSP meta tags in index.html matching only required third-party domain origins and keep index.html entrypoints pointing directly to existing source locations.
