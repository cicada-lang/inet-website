export const codeFragment = `\
type Nat

node zero(
  ------
  value!: Nat
)

node add1(
  prev: Nat
  ----------
  value!: Nat
)

node add(
  target!: Nat,
  addend: Nat
  --------
  result: Nat
)
`

export const code = `\

type Nat

node zero(
  ------
  value!: Nat
)

node add1(
  prev: Nat
  ----------
  value!: Nat
)

node add(
  target!: Nat,
  addend: Nat
  --------
  result: Nat
)

rule add(target!, addend, result)
     zero(value!) {
  @connect(addend, result)
}

rule add(target!, addend, result)
     add1(prev, value!) {
  @connect(add1(add(prev, addend)), result)
}

function one(): Nat {
  return add1(zero())
}

function two(): Nat {
  return add(one(), one())
}

// TEST

eval @inspect(@run(add(two(), two())))
eval @inspect(add(two(), two()))

`
