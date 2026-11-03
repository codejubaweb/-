# Sentinel Security Journal

## 2025-05-18 - Missing Content Security Policy & Entrypoint Resolution
**Vulnerability:** The single-page application lacked a Content Security Policy (CSP), leaving it susceptible to cross-site scripting (XSS) and unauthorized external resource/exfiltration connections. Additionally, `index.html` attempted to load `/src/main.tsx` while `main.tsx` resides at root `./main.tsx`, blocking Vite build resolution.
**Learning:** For client-side React portfolios communicating with Google GenAI APIs (`@google/genai`), CSP headers/meta tags must explicitly allow `connect-src https://generativelanguage.googleapis.com https://*.googleapis.com`, external Google fonts (`https://fonts.googleapis.com`, `https://fonts.gstatic.com`), and portfolio asset CDN origins (`https://lh3.googleusercontent.com`), while blocking `object-src` and restricting `base-uri`.
**Prevention:** Always define explicit CSP in `index.html` for single-page applications and verify asset / entrypoint paths match actual filesystem structure.
