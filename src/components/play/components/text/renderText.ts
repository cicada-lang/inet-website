import { State } from '../../State'

export type RenderTextOptions = {
  lineHeight: number
}

export function renderText(
  state: State,
  text: string,
  x: number,
  y: number,
  options: RenderTextOptions,
): void {
  const { lineHeight } = options

  state.ctx.save()

  const lines = text.split('\n')
  for (const [i, line] of lines.entries()) {
    state.ctx.fillText(line, x, y + i * lineHeight)
  }

  state.ctx.restore()
}
