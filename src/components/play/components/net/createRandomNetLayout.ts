import { Net } from '@cicada-lang/inet-js'
import { NetLayout } from './NetLayout'

export function createRandomNetLayout(
  net: Net,
  options: {
    x: number
    y: number
    width: number
    height: number
    paddingX?: number
    paddingY?: number
  },
): NetLayout {
  const { x, y, width, height } = options

  const paddingX = options.paddingX || 30
  const paddingY = options.paddingY || 30

  const nodePositions = new Map()

  for (const [key, nodeEntry] of net.nodeEntries) {
    nodePositions.set(key, [
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
