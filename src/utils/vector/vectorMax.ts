import { Vector } from './Vector'

export function vectorMax(vs: Array<Vector>): Vector {
  const [v] = vs
  const z: Vector = []
  for (let i = 0; i < v.length; i++) {
    z.push(Math.max(...vs.map((v) => v[i])))
  }

  return z
}
