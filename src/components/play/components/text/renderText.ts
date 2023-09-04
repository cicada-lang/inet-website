import { State } from '../../State'

export type RenderTextOptions = {
  text: string
  x: number
  y: number
  lineHeight: number
}

export function renderText(state: State, options: RenderTextOptions): void {
  const { text, x, y, lineHeight } = options

  state.ctx.save()

  const lines = text.split('\n')
  for (const [i, line] of lines.entries()) {
    state.ctx.fillText(line, x, y + i * lineHeight)
  }

  state.ctx.restore()
}
