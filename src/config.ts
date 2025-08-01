import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Lilitha Mdlalana',
  title: 'Fragments of Thought',
  description: 'A digital notebook on code, creativity, and becoming.',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
