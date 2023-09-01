export function perpendicularFoot(
  [x0, y0]: [number, number],
  [x1, y1]: [number, number],
  [x, y]: [number, number],
): [number, number] {
  if (x0 === x1) {
    return [x0, y]
  }

  const h = (y1 - y0) / (x1 - x0)
  const x2 = (x + h * h * x0 + h * y - h * y0) / (1 + h * h)
  const y2 = h * (x2 - x0) + y0
  return [x2, y2]
}
