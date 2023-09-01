import { Vector } from './Vector'

export function vectorMin(vs: Array<Vector>): Vector {
  const [v] = vs
  const z: Vector = []
  for (let i = 0; i < v.length; i++) {
    z.push(Math.min(...vs.map((v) => v[i])))
  }

  return z
}
