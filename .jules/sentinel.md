## 2025-05-18 - Client-side Content Security Policy for Single-Page Application
**Vulnerability:** Lack of Content Security Policy and referrer controls in `index.html` exposing the portfolio application to potential cross-site scripting (XSS) or data exfiltration.
**Learning:** In Vite single-page applications without a custom backend server, adding CSP `<meta http-equiv="Content-Security-Policy">` tags in `index.html` provides defense-in-depth against malicious script injections while requiring explicit allowance for external assets (Google Fonts, Gemini API endpoints, Google user content avatars).
**Prevention:** Include CSP and strict referrer policy meta tags in single-page web applications from initial setup.
