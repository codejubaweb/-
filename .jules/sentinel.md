# Sentinel Security Journal

This journal records critical security learnings, unique patterns, and architectural security decisions for the project.

## 2026-03-09 - [Production-Only CSP & Frame-Busting Injection]
**Vulnerability:** XSS and clickjacking on static application in production.
**Learning:** Adding a strict Content Security Policy (CSP) and frame-busting script directly to source `index.html` blocks Vite's development HMR and Fast Refresh preamble scripts during local development (`pnpm dev`).
**Prevention:** Implement a custom Vite plugin in `vite.config.ts` that dynamically injects the CSP and frame-busting script only during production builds (`command === 'build'`). This defends the deployed app in production while keeping local development smooth and unrestricted. Additionally, mapping `/src` to root `.` via resolve alias allows standard entry point resolving without modifying the source `index.html`.
