import { Net } from '@cicada-lang/inet'
import { State } from '../State'
import { NetLayout } from './NetLayout'

export function createInitialNetLayout(state: State, net: Net): NetLayout {
  const nodePositions = new Map()

  for (const [id, nodeEntry] of net.nodeEntries) {
    const x = (state.width / 2) * Math.random() + state.width / 4
    const y = (state.height / 2) * Math.random() + state.height / 4

    nodePositions.set(id, [x, y])
  }

  return {
    nodePositions,
  }
}