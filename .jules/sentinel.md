## 2026-03-30 - Prevent Secret Leakage via Vite Define Configuration
**Vulnerability:** Global `define` in `vite.config.ts` replacement for `process.env.GEMINI_API_KEY` bakes sensitive environment variable strings into frontend build artifacts.
**Learning:** Vite replaces `define` tokens at compile time across client-side assets. Direct mapping of secret environment variables into frontend client bundles exposes API keys to users/browsers.
**Prevention:** Do not expose server-side environment variables in Vite's `define` config. Use `import.meta.env` with `VITE_` prefixed variables for safe client-side config, or keep sensitive API calls on a backend service.
