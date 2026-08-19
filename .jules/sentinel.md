# Sentinel Security Journal

## 2025-05-20 - Content Security Policy Implementation
**Vulnerability:** Application lacked explicit Content Security Policy (CSP) headers or meta tags, leaving it vulnerable to cross-site scripting (XSS) and unauthorized resource loading.
**Learning:** Single Page Applications without backend response header control must define strict CSP directives via `<meta http-equiv="Content-Security-Policy">` to limit external assets (scripts, styles, fonts, images).
**Prevention:** Always define CSP restricting `script-src`, `style-src`, `font-src`, `img-src`, and `connect-src` strictly to trusted sources.
