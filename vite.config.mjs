import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: '_site/assets',
    rollupOptions: {
      input: 'src/assets/main.js',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
