# Sentinel Security Journal

## 2026-03-30 - Content Security Policy (CSP) Implementation
**Vulnerability:** Missing Content Security Policy allowed potential unauthorized script execution, malicious data injection, or untrusted cross-origin resource loading in client browser.
**Learning:** Single Page Applications loading external assets (Google Fonts, external image CDN, Gemini API) require explicitly defined CSP directives to maintain defense-in-depth without breaking asset delivery.
**Prevention:** Always maintain an explicit CSP meta tag in `index.html` white-listing specific trusted domains for font, image, script, style, and connect resources.
