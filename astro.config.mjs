import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'

import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    react(),
    expressiveCode({
      // themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black',
        },
        uiFontFamily: 'inherit',
        borderColor: 'black',
      },
    }),
    mdx(),
  ],
  site: 'https://lilitha-mdlalana.is-a.dev',
  trailingSlash: 'never',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
