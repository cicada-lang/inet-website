import { Mod } from '@cicada-lang/inet'
import { animate } from './animate'
import { createState } from './createState'
import { trackMouse } from './mouse/trackMouse'
import { resizeCanvas } from './resizeCanvas'

export function main(
  canvas: HTMLCanvasElement,
  containerElement: HTMLDivElement,
  mod: Mod,
): void {
  resizeCanvas(canvas, containerElement)

  const state = createState({ canvas, mod })

  trackMouse(state.mouse)
  animate(state)
}
