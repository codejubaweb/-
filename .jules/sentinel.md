# Sentinel Security Journal

## 2026-02-20 - CSP & Script Entrypoint Alignment
**Vulnerability:** Missing Content Security Policy leaves the web application exposed to cross-site scripting (XSS) and data exfiltration, while the absence of a `.gitignore` risks accidental commitment of secrets (`.env*`). In addition, `index.html` referencing `/src/main.tsx` broke build resolution because `main.tsx` is located at the root.
**Learning:** For a static React/Vite portfolio interacting with Gemini APIs (`@google/genai`) and external assets (Google Fonts, Google CDN images), a declarative CSP meta tag provides defense-in-depth against unauthorized origins and script injection. In addition, Vite's HTML plugin requires the script tag path to mirror the actual root structure (`/main.tsx`).
**Prevention:** Always maintain a CSP meta tag in `index.html` configured for required services (`fonts.googleapis.com`, `lh3.googleusercontent.com`, `generativelanguage.googleapis.com`), explicitly ignore environment secret files in `.gitignore`, and ensure HTML script references align with file system layout.
