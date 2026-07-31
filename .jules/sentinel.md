# Sentinel Security Journal

## 2025-07-31 - Static Client-Side Clickjacking and XSS Mitigation
**Vulnerability:** Clickjacking via unauthorized framing, and potential Cross-Site Scripting (XSS).
**Learning:** Because this is a static single-page React portfolio application without server-side HTTP header configuration control, standard headers like `X-Frame-Options` or `Content-Security-Policy` cannot be set at the server/reverse-proxy level. Standard CSP and Clickjacking protections must be moved to the client-side.
**Prevention:** Implement a Content Security Policy (CSP) using a `<meta>` tag in `index.html` restricting origins to trusted domains, combined with an inline, SHA-256 authorized frame-busting script `if (self !== top) { top.location = self.location; }` to dynamically block third-party framing.
