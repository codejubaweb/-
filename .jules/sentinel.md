# Sentinel Security Journal

## 2025-05-10 - Content Security Policy Baseline
**Vulnerability:** XSS and unauthorized resource loading in single-page React app.
**Learning:** Pure React frontend needed explicit CSP header/meta tag to restrict script execution, font/style fetching, and external connects (specifically Gemini API).
**Prevention:** Maintain strict CSP in index.html matching active integrations.
