import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://macotasu.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
