/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite';

export default defineConfig({
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.js',
      deps: {
         inline: [/@effection\/vitest/],
      },
   },
});
