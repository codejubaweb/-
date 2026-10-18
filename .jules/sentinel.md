## 2026-03-30 - Added Content Security Policy Header & Fixed Entry Script Path
**Vulnerability:** Lack of Content Security Policy (CSP) allowed potential XSS or unauthorized third-party network requests.
**Learning:** Vite HTML plugin fails to resolve `/src/main.tsx` when `main.tsx` is located at root (`/main.tsx`). Furthermore, CSP in single page React app must allow `@google/genai` API endpoints (`https://generativelanguage.googleapis.com https://*.googleapis.com`) and Google fonts.
**Prevention:** Always maintain CSP meta tag in `index.html` and verify Vite entry points match actual project file locations.
