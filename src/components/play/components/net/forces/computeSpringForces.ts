import { Net } from '@cicada-lang/inet-js'
import { NetLayout } from '../NetLayout'
import { netNodeNeighbors } from '../netNodeNeighbors'
import { computeSpringForce } from './computeSpringForce'

export function computeSpringForces(
  net: Net,
  layout: NetLayout,
): Map<string, [number, number]> {
  const forces = new Map()

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const force: [number, number] = [0, 0]
    for (const neighborId of netNodeNeighbors(net, nodeId)) {
      if (neighborId !== nodeId) {
        const neighborPosition = layout.nodePositions.get(neighborId)
        if (neighborPosition === undefined) continue

        const [x, y] = computeSpringForce(position, neighborPosition)
        force[0] += x
        force[1] += y
      }
    }

    forces.set(nodeId, force)
  }

  return forces
}
