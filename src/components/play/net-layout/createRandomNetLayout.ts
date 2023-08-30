import { Net } from '@cicada-lang/inet'
import { NetLayout } from './NetLayout'

export function createRandomNetLayout(
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
    x,
    y,
    width,
    height,
    nodePositions,
  }
}
