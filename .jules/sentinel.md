## 2026-03-30 - Content Security Policy & Vite Root Entry Point
**Vulnerability:** Missing CSP and Referrer Policy header/meta tags in index.html exposed application to potential XSS and cross-origin leakage.
**Learning:** In Vite setups where main.tsx is located at the project root directory rather than in `src/`, `<script type="module" src="/main.tsx"></script>` must be used in `index.html`.
**Prevention:** Ensure strict CSP meta tags are specified for static SPA apps while accurately targeting entrypoint scripts.
