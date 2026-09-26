# Sentinel Security Journal

## 2025-05-18 - Client-side Content Security Policy and Security Meta Headers
**Vulnerability:** Absence of Content Security Policy (CSP) and referrer policy headers in client-side HTML shell, exposing the web application to potential cross-site scripting (XSS), data exfiltration, or information leakage via referrer headers.
**Learning:** For Vite single-page applications without a custom backend server to inject HTTP response headers, meta tags (`http-equiv="Content-Security-Policy"` and `name="referrer"`) serve as the primary defensive layer for enforcement of resource origin policies in browsers.
**Prevention:** Always define explicit `script-src`, `style-src`, `font-src`, `img-src`, and `connect-src` directives in CSP meta tags, permitting only trusted domains required for frontend runtime execution.
