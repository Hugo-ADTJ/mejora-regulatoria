// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://mejoraregulatoria.agenciadigitaltj.gob.mx',
  integrations: [
    svelte(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
      Logger: 1
    })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});