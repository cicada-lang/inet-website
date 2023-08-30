import { Net } from '@cicada-lang/inet'
import { NetLayout } from './NetLayout'

export function createRandomNetLayout(
  net: Net,
  x: number,
  y: number,
  width: number,
  height: number,
  options?: {
    paddingX: number
    paddingY: number
  },
): NetLayout {
  const paddingX = options?.paddingX || 30
  const paddingY = options?.paddingY || 30

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
    paddingX,
    paddingY,
    nodePositions,
  }
}
