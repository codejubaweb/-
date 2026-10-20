## 2026-03-30 - Content Security Policy & Entry Script Resolution in Vite Single-Folder Layout
**Vulnerability:** Lack of Content Security Policy allowed potential XSS or data exfiltration attacks. Also, Vite HTML plugin fails during build when `index.html` references `/src/main.tsx` if `src/` directory doesn't exist on disk despite Vite aliases.
**Learning:** `main.tsx` resides at root level (`/main.tsx`). Updating `index.html` to `<script type="module" src="/main.tsx"></script>` fixes the Vite build while strictly declaring CSP rules for external Google Gemini APIs and assets.
**Prevention:** Always verify `index.html` entry script paths against actual file system layout during Vite builds and enforce strict Content Security Policy meta tags.
