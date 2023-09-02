export const codeFragment = `\
rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end

zero add1 add1
zero add1 add1
add

zero add1 add1
zero add1 add1
add run $result
`

export const code = `\
type Nat -- Type end

node zero
  ------------
  Nat :value!
end

node add1
  Nat :prev
  ------------
  Nat :value!
end

node add
  Nat :target!
  Nat :addend
  ------------
  Nat :return
end

rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end

zero add1 add1
zero add1 add1
add

zero add1 add1
zero add1 add1
add run $result
`
