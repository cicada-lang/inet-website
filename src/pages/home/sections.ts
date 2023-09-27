import { Section } from './Section'
import { builtins } from './builtins'
import { expressions } from './expressions'
import { statements } from './statements'

export const sections: Record<string, Section> = {
  statements: {
    illustrations: statements,
    title: {
      zh: `${statements.length} 种语句`,
      en: `${statements.length} kinds of statements`,
    },
  },

  expressions: {
    illustrations: expressions,
    title: {
      zh: `${expressions.length} 种表达式`,
      en: `${expressions.length} kinds of expressions`,
    },
  },

  builtins: {
    illustrations: builtins,
    title: {
      zh: `${builtins.length} 个预定义的东西`,
      en: `${builtins.length} built-in definitions`,
    },
  },
}
