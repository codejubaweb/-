## 2025-08-31 - Root Entry Point Resolution and CSP Policy
**Vulnerability:** Lack of Content Security Policy and risk of committing environment secret files.
**Learning:** `main.tsx` is located directly in the repository root (`./main.tsx`) in this setup, so `index.html` references `/main.tsx`. `.gitignore` must explicitly cover `.env*` and `node_modules`.
**Prevention:** Always maintain proper `.gitignore` patterns for secret isolation and enforce restrictive CSP headers/meta tags in frontend web apps.
