# Sentinel Security Journal

This journal records critical architectural security decisions, security vulnerability patterns discovered, or unique security challenges in this application.

## 2026-02-20 - [CSP Implementation and Frame-Buster Anti-Clickjacking Protection]
**Vulnerability:** Clickjacking risk and potentially unsafe inline scripts (XSS).
**Learning:** As a static single-page portfolio application, there is no dynamic backend to send headers like `X-Frame-Options` or `Content-Security-Policy`. Thus, client-side browser protections must be configured via HTML `<meta>` tags. However, implementing standard anti-clickjacking frame-busting scripts inline traditionally requires enabling `unsafe-inline` in the CSP, which weakens XSS protections.
**Prevention:**
1. We implement a strict Content Security Policy (CSP) meta tag that restricts allowed content to self and trusted Google Fonts / User Attachments domains.
2. We deploy a short inline frame-busting script: `if (self !== top) { top.location = self.location; }`.
3. To execute this inline script securely without resorting to `'unsafe-inline'` for `script-src`, we compute its SHA256 hash (`sha256-cuiyKnVfIzxW1MITrzVkvvukdhbzJDhno5S8HWv2T3s=`) and explicitly authorize it within the CSP. This establishes robust protection against both XSS and clickjacking.
