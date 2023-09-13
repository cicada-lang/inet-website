import { Section } from './Section'
import { builtins } from './builtins'
import { statements } from './statements'
import { words } from './words'

export const sections: Record<string, Section> = {
  statements: {
    illustrations: statements,
    title: {
      zh: `${statements.length} 种语句`,
      en: `${statements.length} kinds of statements`,
    },
  },

  words: {
    illustrations: words,
    title: {
      zh: `${words.length} 种词`,
      en: `${words.length} kinds of words`,
    },
  },

  builtins: {
    illustrations: builtins,
    title: {
      zh: `${builtins.length} 个预定义词`,
      en: `${builtins.length} built-in words`,
    },
  },
}
