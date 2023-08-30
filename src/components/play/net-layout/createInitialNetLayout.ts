import { Net } from '@cicada-lang/inet'
import { State } from '../State'
import { NetLayout } from './NetLayout'

export function createInitialNetLayout(
  state: State,
  net: Net,
  x: number,
  y: number,
  width: number,
  height: number,
): NetLayout {
  const nodePositions = new Map()

  for (const [id, nodeEntry] of net.nodeEntries) {
    nodePositions.set(id, [
      x + width * Math.random(),
      y + height * Math.random(),
    ])
  }

  return {
    nodePositions,
  }
}
