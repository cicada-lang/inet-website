import { Illustration } from './Illustration'

export const builtins: Array<Illustration> = [
  {
    name: '@connect',
    description: {
      zh: '取两个接口，将它们相连。',
      en: 'Take two ports and connect them.',
    },
    code: `\
(add)-addend
(add)-return
@connect
`,
  },

  {
    name: '@inspect',
    description: {
      zh: '不取出栈顶值，打印栈顶值的信息。',
      en: 'Print info of the value at the top of the stack, without taking it.',
    },
    code: `\
two two add @inspect
`,
  },

  {
    name: '@apply',
    description: {
      zh: '取栈顶的节点，将其作用于栈中的接口。',
      en: 'Take the node from the top of the stack, and apply it to the ports in the stack.',
    },
    code: `\
(add) @apply
`,
  },

  {
    name: '@spread',
    description: {
      zh: '取栈顶的节点，将其所有接口按定义中相反的顺序返回到栈中。',
      en: "Take the node from the top of the stack, and put all it's ports to the stack in reverse order of the definition.",
    },
    code: `\
(add) @spread $return $addend $target
`,
  },

  {
    name: '@run',
    description: {
      zh: '不取出栈顶接口，运行栈顶接口所在的连通分支。',
      en: 'Run the connected component of the port at the top of the stack, without taking it.',
    },
    code: `\
two two add @run @inspect
`,
  },

  {
    name: '@swap',
    description: {
      zh: '交换栈顶的两个值。',
      en: 'Swap two values at the top of the stack.',
    },
    code: `\
one two @swap
two one
`,
  },

  {
    name: '@rot',
    description: {
      zh: '轮换栈顶的三个值。',
      en: 'Rotate three values at the top of the stack.',
    },
    code: `\
one two three @rot
two three one
`,
  },

  {
    name: '@Type',
    description: {
      zh: '返回 Type 这个值。',
      en: 'Return the value Type.',
    },
    code: `\
define Nat -- @Type end
define List @Type -- @Type end
`,
  },
]
