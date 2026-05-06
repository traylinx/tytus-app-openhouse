/**
 * vite.config.ts — standalone build for tytus-app-openhouse.
 *
 * Inlined from the monorepo's vite.lib.config.ts. Externalises React
 * + @tytus/host-api so the host's loaded singletons are reused at
 * runtime via the importmap shim. lucide-react is NOT externalised by
 * the host (no shim in app/index.html), so we bundle it here — the
 * shipped dist/index.js carries its own lucide copy.
 *
 * See packages/host-api/EXTERNAL_APP_BUILD.md in the tytus-os monorepo
 * for the full build contract.
 */

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@tytus/host-api',
      ],
      output: {
        preserveModules: false,
        entryFileNames: 'index.js',
        chunkFileNames: '[name]-[hash].js',
      },
    },
    target: 'es2022',
    minify: 'esbuild',
    sourcemap: true,
    emptyOutDir: true,
  },
});
