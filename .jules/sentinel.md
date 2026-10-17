## 2025-05-18 - Client-Side Content Security Policy for Vite SPA
**Vulnerability:** Absence of Content Security Policy allowed unrestricted resource loading and external network connections.
**Learning:** In Vite SPAs utilizing `@google/genai`, CSP `connect-src` directives must explicitly permit `https://generativelanguage.googleapis.com` and `https://*.googleapis.com`.
**Prevention:** Maintain strict `default-src 'self'` while explicitly whitelisting required external API endpoints in `index.html` CSP meta tag.
