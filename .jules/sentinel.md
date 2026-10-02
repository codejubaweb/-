## 2025-05-18 - Vite HTML resolution with missing src/ directory
**Vulnerability:** Vite build failure prevented production builds due to invalid script src `/src/main.tsx`.
**Learning:** `index.html` referenced `/src/main.tsx` while `main.tsx` resides at root `./main.tsx`. Vite HTML transform failed because no `src/` directory existed on disk.
**Prevention:** Reference `/main.tsx` directly in `index.html` when entry files are at project root.
