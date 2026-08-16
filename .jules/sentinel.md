## 2026-08-16 - CSP Meta Tag Constraints and Hash-Authorized Frame Busting
**Vulnerability:** Absence of Content Security Policy (CSP) and clickjacking protection on client-side portfolio application.
**Learning:** Per W3C CSP specs, `frame-ancestors` directive is ignored inside HTML `<meta>` tags. Additionally, `connect-src 'self'` blocks external client API calls (such as Gemini API `@google/genai`).
**Prevention:** Use SHA-256 script hashing (`'sha256-...'`) in `<meta http-equiv="Content-Security-Policy">` for inline frame-busting scripts without enabling `'unsafe-inline'`, and explicitly include required external domain origins (e.g. `https://generativelanguage.googleapis.com`) in `connect-src`.
