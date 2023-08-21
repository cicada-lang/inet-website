import { Net } from '@cicada-lang/inet/lib/lang/net'
import { NetLayout } from './NetLayout'
import { computeSpringForce } from './computeSpringForce'
import { nodeNeighborsOrFail } from './nodeNeighborsOrFail'

export function computeSpringForces(
  net: Net,
  layout: NetLayout,
): Map<Node, [number, number]> {
  const forces = new Map()

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const force: [number, number] = [0, 0]
    for (const neighborId of nodeNeighborsOrFail(net, nodeId)) {
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
