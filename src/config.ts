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
  title: 'Lilitha Mdlalana — Software Engineer',
  description: 'Software Engineer specialising in React and TypeScript. Writing about frontend development, architecture, and learning in public.',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
