import { Net } from '@cicada-lang/inet-js'
import { NetLayout } from '../NetLayout'
import { computeElectricalForce } from './computeElectricalForce'

export function computeElectricalForces(
  net: Net,
  layout: NetLayout,
): Map<string, [number, number]> {
  const forces = new Map()

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const force: [number, number] = [0, 0]
    for (const [otherId, otherNodeEntry] of net.nodeEntries) {
      if (otherId !== nodeId) {
        const otherPosition = layout.nodePositions.get(otherId)
        if (otherPosition === undefined) continue

        const [x, y] = computeElectricalForce(position, otherPosition)
        force[0] += x
        force[1] += y
      }
    }

    forces.set(nodeId, force)
  }

  return forces
}
