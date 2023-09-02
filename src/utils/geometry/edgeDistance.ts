import { vectorDistance } from '../vector'
import { perpendicularFoot } from './perpendicularFoot'

export function edgeDistance(
  [x0, y0]: [number, number],
  [x1, y1]: [number, number],
  [x, y]: [number, number],
): number {
  const [footX, footY] = perpendicularFoot([x0, y0], [x1, y1], [x, y])
  if (
    (x0 <= footX && footX <= x1 && y0 <= footY && footY <= y1) ||
    (x0 <= footX && footX <= x1 && y1 <= footY && footY <= y0) ||
    (x1 <= footX && footX <= x0 && y0 <= footY && footY <= y1) ||
    (x1 <= footX && footX <= x0 && y1 <= footY && footY <= y0)
  ) {
    return vectorDistance([footX, footY], [x, y])
  } else {
    return Math.min(
      vectorDistance([x0, y0], [x, y]),
      vectorDistance([x1, y1], [x, y]),
    )
  }
}
