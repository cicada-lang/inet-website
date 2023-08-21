import { Mod } from '@cicada-lang/inet'
import { animate } from './animate'
import { createState } from './createState'

export function main(
  canvas: HTMLCanvasElement,
  containerElement: HTMLDivElement,
  mod: Mod,
): void {
  canvas.width = containerElement.offsetWidth
  canvas.height = containerElement.offsetHeight

  new ResizeObserver(() => {
    canvas.width = containerElement.offsetWidth
    canvas.height = containerElement.offsetHeight
  }).observe(containerElement)

  const state = createState({ canvas, mod })
  animate(state)
}
