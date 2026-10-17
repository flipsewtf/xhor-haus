// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://xhor.haus',

    integrations: [sitemap(), mdx()],

    devToolbar: {
        enabled: false,
    },

    server: {
        host: true,
    },

    markdown: {
        shikiConfig: {
            theme: 'gruvbox-dark-hard',
        },
    },

    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
});
