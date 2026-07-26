## 2026-02-20 - Defense-in-Depth for Single-Page React Applications
**Vulnerability:** Cross-Site Scripting (XSS) and Clickjacking vulnerabilities in static frontend environments.
**Learning:** Purely static React applications hosted on platforms without custom server-side header control cannot rely on HTTP response headers like `Content-Security-Policy` or `X-Frame-Options` for protection.
**Prevention:** Implement a strong client-side Content Security Policy (CSP) using HTML `<meta>` tags to restrict unauthorized scripts/resource loading, combined with an inline script-based frame-busting mechanism (with corresponding CSP script-src SHA-256 hash) to prevent unauthorized framing (clickjacking defense).
