import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/goit-js-hw-111/',  // Базовый путь для GitHub Pages
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'), // Убедитесь, что пути к входным файлам указаны правильно
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Это создаст отдельный чанк для зависимостей
          }
        },
        entryFileNames: 'commonHelpers.js',
      },
    },
    outDir: '../dist',
    emptyOutDir: true, // Очищает папку dist перед новой сборкой
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
