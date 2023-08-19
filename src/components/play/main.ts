import { animate } from './animate'
import { createState } from './createState'

export function main(
  canvas: HTMLCanvasElement,
  containerElement: HTMLDivElement,
): void {
  canvas.width = containerElement.offsetWidth
  canvas.height = containerElement.offsetHeight

  new ResizeObserver(() => {
    canvas.width = containerElement.offsetWidth
    canvas.height = containerElement.offsetHeight
  }).observe(containerElement)

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const state = createState(canvas)
  animate(ctx, state)
}
