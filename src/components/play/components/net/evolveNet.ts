import { State } from '../../State'
import { NetLayout } from '../net/NetLayout'
import { NetRendering } from '../net/NetRendering'
import { computeElectricalForces } from './forces/computeElectricalForces'
import { computeSpringForces } from './forces/computeSpringForces'

export function evolveNet(state: State, rendering: NetRendering): void {
  const { net, layout, evolvingStep, evolvingStepMaximum } = rendering

  if (evolvingStep > evolvingStepMaximum) {
    return
  }

  rendering.evolvingStep++

  const coolingFactor = 0.999

  const springForces = computeSpringForces(net, layout)
  const electricalForces = computeElectricalForces(net, layout)

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const springForce = springForces.get(nodeId)
    if (springForce) {
      position[0] += springForce[0] * coolingFactor ** evolvingStep
      position[1] += springForce[1] * coolingFactor ** evolvingStep
      boundPosition(position, layout)
    }

    const electricalForce = electricalForces.get(nodeId)
    if (electricalForce) {
      position[0] += electricalForce[0] * coolingFactor ** evolvingStep
      position[1] += electricalForce[1] * coolingFactor ** evolvingStep
      boundPosition(position, layout)
    }
  }
}

function boundPosition(position: [number, number], layout: NetLayout): void {
  const factor = 0.1

  if (position[0] < layout.x + layout.paddingX) {
    position[0] += (layout.x + layout.paddingX - position[0]) * factor
  } else if (position[0] > layout.x + layout.width - layout.paddingX) {
    position[0] -=
      (position[0] - (layout.x + layout.width - layout.paddingX)) * factor
  }

  if (position[1] < layout.y + layout.paddingY) {
    position[1] += (layout.y + layout.paddingY - position[1]) * factor
  } else if (position[1] > layout.y + layout.height - layout.paddingY) {
    position[1] -=
      (position[1] - (layout.y + layout.height - layout.paddingY)) * factor
  }
}
