import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode, command}) => {
  const env = loadEnv(mode, '.', '');
  const isBuild = command === 'build';
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'production-security-headers',
        transformIndexHtml(html) {
          if (!isBuild) return html;
          const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'sha256-cuiyKnVfIzxW1MITrzVkvvukdhbzJDhno5S8HWv2T3s='; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://lh3.googleusercontent.com https://github.com; connect-src 'self' ws: wss:;" />`;
          const frameBuster = `<script>if (self !== top) { top.location = self.location; }</script>`;
          return html.replace('<head>', `<head>\n    ${csp}\n    ${frameBuster}`);
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
