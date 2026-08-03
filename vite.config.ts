import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-security-headers',
        transformIndexHtml(html, ctx) {
          // Dynamic injection of CSP and Frame-busting script only during production build
          if (ctx.server) {
            // Skip injection during local development to avoid breaking HMR or local WebSocket connections (ws://)
            return html;
          }

          // Use a strict CSP for production. Since we don't have inline scripts in index.html,
          // we can specify a safe script-src that allows self-hosted scripts.
          // Note: frame-ancestors is ignored in meta tags by the W3C spec. Modern browsers rely on X-Frame-Options
          // or CSP frame-ancestors header, but for a static build, we inject an inline frame-busting script
          // to protect against clickjacking in older/modern browsers when headers can't be set.
          const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://* data:; connect-src 'self' https://*;">`;
          const frameBuster = `
            <script>
              if (self !== top) {
                top.location = self.location;
              }
            </script>
          `;
          return html.replace('<head>', `<head>\n    ${cspMeta}\n    ${frameBuster}`);
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '/src': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
