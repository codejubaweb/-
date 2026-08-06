import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

// Custom security plugin to dynamically inject CSP and frame-busting script in production
function securityHeadersPlugin() {
  return {
    name: 'security-headers',
    transformIndexHtml(html: string, ctx: any) {
      // Only inject during production build
      if (ctx.bundle) {
        const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://lh3.googleusercontent.com data:; connect-src 'self' https://generativelanguage.googleapis.com; frame-ancestors 'none';">`;
        const frameBusting = `
    <style id="antiClickjack">body{display:none !important;}</style>
    <script>
      if (self === top) {
        var antiClickjack = document.getElementById("antiClickjack");
        if (antiClickjack) {
          antiClickjack.parentNode.removeChild(antiClickjack);
        }
      } else {
        top.location = self.location;
      }
    </script>
        `;
        return html.replace('<head>', `<head>\n    ${cspMeta}\n    ${frameBusting}`);
      }
      return html;
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), securityHeadersPlugin()],
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
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
