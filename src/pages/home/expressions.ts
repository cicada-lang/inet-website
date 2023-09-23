import { Illustration } from './Illustration'

export const expressions: Array<Illustration> = [
  {
    name: 'Var',
    description: {
      zh: '变量，用来引用已有的定义。',
      en: 'Variable, to reference an existing definition.',
    },
    code: `\
Nat
zero
add1
add
`,
  },

  {
    name: 'Builtin',
    description: {
      zh: '内置变量，用来引用系统中预定义的东西。',
      en: 'To reference a builtin definition.',
    },
    code: `\
@connect
@inspect
@run
@Type
`,
  },

  {
    name: 'Ap / Function',
    description: {
      zh: '将一个函数作用到参数上。',
      en: 'Apply a function to arguments.',
    },
    code: `\
one()
add2(one())
add2(add2(one()))
`,
  },

  {
    name: 'Ap / TypeCtor',
    description: {
      zh: '带有参数的类型构造子作用在类型参数上，就是构造类型。',
      en: 'To apply a type constructor to type arguments, is to create a type term.',
    },
    code: `\
type Nat
type List(Element: @Type)

List(Nat)
`,
  },

  {
    name: 'Ap / Node',
    description: {
      zh: '节点作用在参数上意味着做连接。参数不够时，返回多出来的边，用于之后做连接。多一个参数时，与返回值相连。',
      en: 'To apply a node to arguments, is to connect it with arguments. When there are not enough aruguments, return the extra edges for building connections later. When there is an extra argument, connect it with the return value.',
    },
    code: `\
let z = add(two(), two())

let y, z = add(two())
let x, y, z = add()

add(two(), two(), result)
@connect(add(two(), two()), result)
`,
  },

  {
    name: 'QuoteSymbol',
    description: {
      zh: '引用一个记号，可以作为类型变元。',
      en: 'Quote a symbol which can be used as a type variable.',
    },
    code: `\
'A
List('A)
`,
  },

  {
    name: 'Block',
    description: {
      zh: '代码块，其中可以用 let。末尾可以有个 return 给出整个代码块的值。',
      en: 'Code block in which we can use `let`. A code block can end with a `return` to give the value of the whole code block.',
    },
    code: `\
let x = {
  let four = add(two(), two())
  return add2(four)
}
`,
  },
]
