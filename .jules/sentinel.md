# Sentinel Security Journal

## 2025-05-11 - Content Security Policy Configuration for AI Studio / Gemini Integration
**Vulnerability:** Missing Content Security Policy (CSP) headers or meta tags allowed arbitrary script execution, unverified style/font loading, and untrusted network connections.
**Learning:** In single-page applications integrating `@google/genai` without a dedicated backend, `connect-src` must explicitly allow `https://generativelanguage.googleapis.com` and `https://*.googleapis.com`, and fonts/images from Google CDN (`https://fonts.googleapis.com`, `https://fonts.gstatic.com`, and `https://lh3.googleusercontent.com`) must be explicitly whitelisted without opening wildcard access.
**Prevention:** Include a tailored `<meta http-equiv="Content-Security-Policy">` directive in `index.html` ensuring least privilege for third-party assets and API calls.
