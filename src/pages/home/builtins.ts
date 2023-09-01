import { Illustration } from './Illustration'

export const builtins: Array<Illustration> = [
  {
    name: 'connect',
    description: {
      zh: '取两个接口，将它们相连。',
      en: 'Take two ports and connect them.',
    },
    code: `\
(add)-addend
(add)-return
connect
`,
  },

  {
    name: 'inspect',
    description: {
      zh: '不取出栈顶值，打印栈顶值的信息。',
      en: 'Print info of the value at the top of the stack, without taking it',
    },
    code: `\
two two add inspect
`,
  },

  {
    name: 'run',
    description: {
      zh: '不取出栈顶接口，运行栈顶接口所在的连通分支。',
      en: 'Run the connected component of the port at the top of the stack, without taking it.',
    },
    code: `\
two two add run inspect
`,
  },

  {
    name: 'swap',
    description: {
      zh: '交换栈顶的两个值。',
      en: 'Swap two values at the top of the stack.',
    },
    code: `\
one two swap
two one
`,
  },

  {
    name: 'rot',
    description: {
      zh: '轮换栈顶的三个值。',
      en: 'Rotate three values at the top of the stack.',
    },
    code: `\
one two three rot
two three one
`,
  },

  {
    name: 'Type',
    description: {
      zh: '返回 Type 这个值。',
      en: 'Return the value Type.',
    },
    code: `\
define Nat -- Type end
define List Type -- Type end
`,
  },
]
