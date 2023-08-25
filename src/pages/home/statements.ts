import { Example } from './Example'

export const statements: Array<Example> = [
  {
    name: 'type',
    description: {
      zh: '定义一个类型。',
      en: 'Define a type.',
    },
    code: `type Nat -- Type end`,
  },

  {
    name: 'node',
    description: {
      zh: '定义一个节点。',
      en: 'Define a node.',
    },
    code: `\
node zero
  ----------
  Nat :value!
end

node add1
  Nat :prev
  ----------
  Nat :value!
end

node add
  Nat :target!
  Nat :addend
  -----------
  Nat :return
end
`,
  },

  {
    name: 'rule',
    description: {
      zh: '针对两个节点，定义一条规则。',
      en: 'Define a rule between two nodes.',
    },
    code: `\
rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end
`,
  },

  {
    name: 'claim',
    description: {
      zh: '在定义一个词之前，声明这个词的类型。',
      en: 'Claim the type of a word before defining the word.',
    },
    code: `\
claim one -- Nat end
claim two -- Nat end
claim three -- Nat end
`,
  },

  {
    name: 'define',
    description: {
      zh: '定义一个词。',
      en: 'Define a word.',
    },
    code: `\
define one zero add1 end
define two one one add end
define three two one add end
`,
  },

  {
    name: 'check',
    description: {
      zh: '检查一段话，是否符合类型。',
      en: 'Check if a sentence is of given type.',
    },
    code: `\
check
  Nat Nat -- Nat
then
  add
end

check
  Nat -- Nat
then
  one add
end
`,
  },

  {
    name: 'import',
    description: {
      zh: '从模块引入某些定义。',
      en: 'Import some definitions from a module.',
    },
    code: `\
import
  Nat, zero, add1, add
from "./Nat.i"

import
   one, two, three
from "https://cdn.inet.run/tests/datatype/Nat.i"
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
