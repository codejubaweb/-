## 2026-03-30 - Client-Side CSP and External Link Security
**Vulnerability:** Missing Content Security Policy (CSP), referrer policies, and missing `rel="noopener noreferrer"` attributes on external links in single-page frontend.
**Learning:** For pure frontend React apps hosted via static server or Vite, security meta tags (`Content-Security-Policy`, `Referrer-Policy`) in `index.html` combined with strict `rel` attributes on external links protect against XSS, unwanted external resource loading, and reverse tabnabbing.
**Prevention:** Always ensure `index.html` enforces explicit CSP sources and external links set `rel="noopener noreferrer"`.
