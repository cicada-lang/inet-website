import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { Rect } from '../button/Rect'

export function renderButtonNodes(state: State): void {
  state.ctx.save()

  const lang = useGlobalLang()
  state.ctx.font = state.breakpoints.md ? '18px sans-serif' : '16px sans-serif'
  const text = lang.isZh() ? `节点` : `Nodes`
  const textMetrics = state.ctx.measureText(text)

  const height = 34

  const width = textMetrics.width
  const x = state.width - width
  const y = height

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.lineWidth = 1

  state.ctx.beginPath()
  const rect: Rect = [x, y, width, height]
  // state.ctx.strokeRect(...rect)

  const textOffset = 13
  state.ctx.fillText(text, x, y + height - textOffset)

  if (state.path === 'nodes') {
    state.ctx.lineWidth = 1.5
    const underlineOffset = 8
    state.ctx.beginPath()
    state.ctx.moveTo(x, y + height - underlineOffset)
    state.ctx.lineTo(x + width, y + height - underlineOffset)
    state.ctx.stroke()
    state.buttons.delete('nodes')
  } else {
    state.buttons.set('nodes', {
      rect,
      handler: (state) => {
        state.historyPaths.push(state.path)
        state.path = 'nodes'
      },
    })
  }

  state.ctx.restore()
}
