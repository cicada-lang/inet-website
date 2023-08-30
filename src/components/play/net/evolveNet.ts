import { State } from '../State'
import { computeElectricalForces } from '../forces/computeElectricalForces'
import { computeSpringForces } from '../forces/computeSpringForces'
import { NetLayout } from '../net-layout/NetLayout'
import { NetRendering } from '../net-rendering/NetRendering'

export function evolveNet(state: State, rendering: NetRendering): void {
  const { net, layout, step } = rendering

  rendering.step++

  const coolingFactor = 0.999

  const springForces = computeSpringForces(net, layout)
  const electricalForces = computeElectricalForces(net, layout)

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const springForce = springForces.get(nodeId)
    if (springForce) {
      position[0] += springForce[0] * coolingFactor ** step
      position[1] += springForce[1] * coolingFactor ** step
      boundPosition(position, layout)
    }

    const electricalForce = electricalForces.get(nodeId)
    if (electricalForce) {
      position[0] += electricalForce[0] * coolingFactor ** step
      position[1] += electricalForce[1] * coolingFactor ** step
      boundPosition(position, layout)
    }
  }
}

function boundPosition(position: [number, number], layout: NetLayout): void {
  if (position[0] < layout.x) {
    position[0] = layout.x
  }

  if (position[0] > layout.x + layout.width) {
    position[0] = layout.x + layout.width
  }

  if (position[1] < layout.y) {
    position[1] = layout.y
  }

  if (position[1] > layout.y + layout.height) {
    position[1] = layout.y + layout.height
  }
}
