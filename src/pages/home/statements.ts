import { Illustration } from './Illustration'

export const statements: Array<Illustration> = [
  {
    name: 'type',
    description: {
      zh: '定义一个类型。',
      en: 'Define a type.',
    },
    code: `\
type Nat
`,
  },

  {
    name: 'node',
    description: {
      zh: '定义一个节点。',
      en: 'Define a node.',
    },
    code: `\
node zero(-- value!: Nat)
node add1(prev: Nat -- value!: Nat)

node add(
  target!: Nat,
  addend: Nat
  --------
  result: Nat
)
`,
  },

  {
    name: 'rule',
    description: {
      zh: '针对两个节点，定义一条规则。',
      en: 'Define a rule between two nodes.',
    },
    code: `\
rule add(target!, addend, result) zero(value!) {
  @connect(addend, result)
}

rule add(target!, addend, result) add1(prev, value!) {
  add1(add(prev, addend), result)
}
`,
  },

  {
    name: 'function',
    description: {
      zh: '定义一个函数。',
      en: 'Define a function.',
    },
    code: `\
function one(): Nat {
  return add1(zero())
}

function two(): Nat {
  return add(one(), one())
}

function add2(x: Nat): Nat {
  return add1(add1(x))
}

`,
  },

  {
    name: 'eval',
    description: {
      zh: '求值一个表达式。',
      en: 'Evaluate an expression.',
    },
    code: `\
eval add(two(), two())
`,
  },

  {
    name: 'let',
    description: {
      zh: '给一个变量赋值。',
      en: 'Assign a value to a variable.',
    },
    code: `\
let x = add(two(), two())
`,
  },

  {
    name: 'import',
    description: {
      zh: '从模块引入某些定义。',
      en: 'Import some definitions from a module.',
    },
    code: `\
import {
  Nat, zero, add1, add,
  one, two, three
} from "./Nat.i"
`,
  },

  {
    name: 'require',
    description: {
      zh: '从模块引入所有定义。',
      en: 'Import all definitions from a module.',
    },
    code: `\
require "./Nat.i"
`,
  },
]
