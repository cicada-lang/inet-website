import { State } from '../State'
import { CurrentPort } from '../current/Current'
import { computeElectricalForces } from '../forces/computeElectricalForces'
import { computeSpringForces } from '../forces/computeSpringForces'

export function evolveNet(state: State, current: CurrentPort): void {
  const { net, layout } = current

  const coolingFactor = 0.999
  const step = current.evolvingStep

  const springForces = computeSpringForces(net, layout)
  const electricalForces = computeElectricalForces(net, layout)

  for (const [nodeId, nodeEntry] of net.nodeEntries) {
    const position = layout.nodePositions.get(nodeId)
    if (position === undefined) continue

    const springForce = springForces.get(nodeId)
    if (springForce) {
      position[0] += springForce[0] * coolingFactor ** step
      position[1] += springForce[1] * coolingFactor ** step
    }

    const electricalForce = electricalForces.get(nodeId)
    if (electricalForce) {
      position[0] += electricalForce[0] * coolingFactor ** step
      position[1] += electricalForce[1] * coolingFactor ** step
    }
  }

  current.evolvingStep++
}
