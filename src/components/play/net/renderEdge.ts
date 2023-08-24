import { State } from '../State'

export function renderEdge(
  state: State,
  first: [number, number],
  second: [number, number],
): void {
  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  state.ctx.lineWidth = 1

  state.ctx.beginPath()
  state.ctx.moveTo(first[0], first[1])
  state.ctx.lineTo(second[0], second[1])
  state.ctx.stroke()

  state.ctx.restore()
}
