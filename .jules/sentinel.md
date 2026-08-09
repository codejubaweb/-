# Sentinel Security Journal

This journal records critical security learnings, unique patterns, and architectural security decisions for this single-page portfolio application.

## 2026-02-20 - Defense-in-Depth for Static Portfolio Site (CSP and Frame-Busting)
**Vulnerability:** As a purely static client-side React portfolio application deployed without a server (Vite build), traditional HTTP headers (like `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`) cannot be set on the server-side directly from the codebase. This leaves the application susceptible to cross-site scripting (XSS) via third-party script injection and clickjacking.
**Learning:** We can implement client-side/static-level defense-in-depth by:
1. Adding a `<meta http-equiv="Content-Security-Policy" content="...">` to restrict source domains for scripts, styles, connections, and images.
2. Adding frame-busting scripts in the HTML header to prevent the site from being rendered inside an `iframe` on an external origin, serving as clickjacking protection in environments where `X-Frame-Options` or CSP `frame-ancestors` headers are unavailable or ignored in meta-tags.
**Prevention:** Always integrate strict client-side Content Security Policy meta tags and frame-busting scripts in static site templates to mitigate basic web vulnerabilities.
