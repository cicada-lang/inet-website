import { Net } from '@cicada-lang/inet'
import { State } from '../State'
import { computeElectricalForces } from '../forces/computeElectricalForces'
import { computeSpringForces } from '../forces/computeSpringForces'
import { NetLayout } from '../net-layout/NetLayout'

export function evolveNet(
  state: State,
  net: Net,
  layout: NetLayout,
  step: number,
): void {
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
    }

    const electricalForce = electricalForces.get(nodeId)
    if (electricalForce) {
      position[0] += electricalForce[0] * coolingFactor ** step
      position[1] += electricalForce[1] * coolingFactor ** step
    }
  }
}
