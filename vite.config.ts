import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

// Custom build-time plugin to inject Content Security Policy (CSP) and frame-busting protections.
const securityPlugin = () => {
  return {
    name: 'security-plugin',
    transformIndexHtml(html: string) {
      // Create CSP header rules to prevent XSS, unauthorized resource loads, etc.
      // Note: 'frame-ancestors' is omitted here because it is ignored by browsers
      // when defined inside a <meta> CSP tag per W3C specifications.
      // Clickjacking protection is instead enforced via the inline frame-busting script below.
      const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://lh3.googleusercontent.com https://github.com",
        "connect-src 'self' https://generativelanguage.googleapis.com",
      ].join('; ');

      const metaCsp = `<meta http-equiv="Content-Security-Policy" content="${csp}">`;

      // Inline frame-busting script to defend against clickjacking (since frame-ancestors cannot be set in <meta> tags).
      const frameBuster = `
        <script>
          if (self !== top) {
            top.location = self.location;
          }
        </script>
      `.trim();

      // Inject the elements before the closing </head> tag.
      return html.replace('</head>', `${metaCsp}\n    ${frameBuster}\n  </head>`);
    },
  };
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), securityPlugin()],
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
