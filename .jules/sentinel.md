# Sentinel Security Journal

This journal records critical security learnings and unique architectural security decisions for the project.

## 2026-03-05 - [XSS and Clickjacking Mitigation via Custom Build-Time HTML Plugin]
**Vulnerability:** Cross-Site Scripting (XSS) and Clickjacking vulnerability potentials in a static single-page web portfolio application.
**Learning:** For pure frontend static applications hosted on CDNs or external hosting providers, standard HTTP security headers (like Content-Security-Policy or X-Frame-Options) might not be configurable. Unconditionally injecting a CSP in both development and production can break local developer workflows (like Hot Module Replacement WebSocket connections over `ws://`). Additionally, the W3C spec specifies that the `frame-ancestors` directive is completely ignored when included in a `<meta>` tag, necessitating alternative techniques like an inline frame-busting script for clickjacking protection.
**Prevention:** Injected a dynamic Content Security Policy (CSP) meta tag and an inline frame-busting script directly into `index.html` only during production build (`vite build`) via a custom plugin in `vite.config.ts`. This protects the application in production while leaving the development server completely unimpeded and fully functional.
