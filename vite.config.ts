import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: 'https://asmithcodes.github.io',
            dynamicRoutes: [
                '/',
            ],
            changefreq: 'monthly',
            priority: 1.0,
            lastmod: new Date(),
        }),
    ],
    base: '/',
})
