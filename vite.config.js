import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';

export default defineConfig({
  server: {
    cors: {
      origin: /https?:\/\/.*\.test(:\d+)?$/,
    },
  },
  resolve: {
    alias: {
      $img: resolve('resources/img'),
      fonts: resolve('resources/css/fonts')
    }
  },
  plugins: [
      laravel({
          input: [
              'resources/css/app.css',
              'resources/js/app.js',
            
          ],
          refresh: true,
      }),
  ],
});
