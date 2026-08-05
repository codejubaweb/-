import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

function productionSecurityPlugin() {
  return {
    name: 'production-security-plugin',
    transformIndexHtml(html: string, ctx: any) {
      // Only apply this in production builds (not during dev server)
      if (ctx.server) {
        return html;
      }

      // We inject security tags using Vite's structured tag injection instead of fragile string replacement.
      // Note: we use CSP with specific script hash instead of 'unsafe-inline' for best practice XSS protection.
      // Note: frame-ancestors is omitted because it is ignored in meta tags. Frame-busting is used for clickjacking defense.
      return {
        html,
        tags: [
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'Content-Security-Policy',
              content: "default-src 'self'; connect-src 'self' https://generativelanguage.googleapis.com https://api.github.com https://*.googleapis.com; script-src 'self' 'sha256-cuiyKnVfIzxW1MITrzVkvvukdhbzJDhno5S8HWv2T3s='; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; object-src 'none';"
            },
            injectTo: 'head-prepend'
          },
          {
            tag: 'script',
            children: 'if (self !== top) { top.location = self.location; }',
            injectTo: 'head-prepend'
          }
        ]
      };
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), productionSecurityPlugin()],
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
