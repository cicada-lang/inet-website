import { Example } from './Example'

export const words: Array<Example> = [
  {
    name: 'Call',
    description: {
      zh: '根据名字，调用一个定义。',
      en: 'Given name, call a definition.',
    },
    code: `... add ...`,
  },

  {
    name: 'Local',
    description: {
      zh: '将栈顶的值保存到局部变量种，以在后面的段落中引用。',
      en: 'Save the value at the top of the stack to a local variable to reference it later.',
    },
    code: `\
... $result ... result ...
`,
  },

  {
    name: 'Symbol',
    description: {
      zh: '返回一个记号，可以作为类型变元。',
      en: 'Return a symbol which can be used as a type variable.',
    },
    code: `\
... 'A List ...
`,
  },

  {
    name: 'Label',
    description: {
      zh: '取栈顶值，返回一个带有标记的值。',
      en: 'Take a value, return a labeled value.',
    },
    code: `\
... 'A List :tail ...
`,
  },

  {
    name: 'NodeRearrange',
    description: {
      zh: '在调用一个节点之前，重新排列它的输入与输出接口。',
      en: `Rearrange a node's input and output ports before calling it.`,
    },
    code: `\
... (cons :tail) ...
`,
  },

  {
    name: 'PortPush',
    description: {
      zh: '返回将节点的接口，只能用于当前规则的节点。',
      en: 'Return port of a node, only for nodes of a rule.',
    },
    code: `\
...
(add)-addend
(add1)-prev
...
`,
  },

  {
    name: 'PortReconnect',
    description: {
      zh: '取一个接口，与节点的接口相连，只能用于当前规则的节点。',
      en: 'Take a port, connect it with the given port of a node, only for nodes of a rule.',
    },
    code: `\
...
(add)-addend
(add1)-prev add
add1 return-(add)
...
`,
  },
]
