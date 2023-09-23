import { Illustration } from './Illustration'

export const builtins: Array<Illustration> = [
  {
    name: '@connect',
    description: {
      zh: '通过一条边来连接两个接口。',
      en: 'Connect two ports via an edge.',
    },
    code: `\
@connect(addend, result)
`,
  },

  {
    name: '@inspect',
    description: {
      zh: '打印值的信息。',
      en: 'Print info of a value.',
    },
    code: `\
@inspect(add(two(), two()))
`,
  },

  {
    name: '@run',
    description: {
      zh: '运行边所在的连通分支。',
      en: 'Run the connected component of an edge.',
    },
    code: `\
@run(add(two(), two()))
`,
  },

  {
    name: '@Type',
    description: {
      zh: '返回 Type 这个值。',
      en: 'Return the value Type.',
    },
    code: `\
@Type
`,
  },
]
