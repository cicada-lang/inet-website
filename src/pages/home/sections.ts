import { builtins } from './builtins'
import { statements } from './statements'
import { words } from './words'

export const sections = [
  {
    name: 'statements',
    examples: statements,
    title: {
      zh: '8 种语句',
      en: '8 kinds of statements',
    },
  },

  {
    name: 'words',
    examples: words,
    title: {
      zh: '8 种词',
      en: '8 kinds of words',
    },
  },

  {
    name: 'builtins',
    examples: builtins,
    title: {
      zh: '6 个预定义词',
      en: '6 built-in words',
    },
  },
]
