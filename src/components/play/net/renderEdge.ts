import { Port } from '@cicada-lang/inet'
import colors from 'tailwindcss/colors'
import { State } from '../State'

export function renderEdge(
  state: State,
  first: {
    port: Port
    position: [number, number]
  },
  second: {
    port: Port
    position: [number, number]
  },
): void {
  state.ctx.save()

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.lineWidth = 1.3

  if (first.port.isPrincipal && second.port.isPrincipal) {
    state.ctx.strokeStyle =
      state.theme.name === 'dark' ? colors.rose[400] : colors.rose[500]
    state.ctx.lineWidth = 1.8
  }

  state.ctx.beginPath()
  state.ctx.moveTo(first.position[0], first.position[1])
  state.ctx.lineTo(second.position[0], second.position[1])
  state.ctx.stroke()

  state.ctx.restore()
}
