# Sentinel Security Journal

## 2026-02-20 - Defense-in-Depth Content Security Policy
**Vulnerability:** The single-page application lacked a Content Security Policy (CSP), exposing the application to potential Cross-Site Scripting (XSS), script injection, and unauthorized data exfiltration.
**Learning:** Pure client-side static SPAs built with Vite can enforce a strong baseline CSP via an HTML meta tag. The CSP directives need to accommodate external portfolio assets (such as Google Fonts from `fonts.googleapis.com` / `fonts.gstatic.com`, portfolio images on `lh3.googleusercontent.com`, and Gemini API endpoints on `generativelanguage.googleapis.com`) while disallowing untrusted scripts and objects.
**Prevention:** Always define explicit `Content-Security-Policy` directives restricting default, script, style, font, image, and connect sources to trusted endpoints only.
