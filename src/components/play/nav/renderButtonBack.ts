import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { Rect } from '../button/Rect'

export function renderButtonBack(state: State): void {
  state.ctx.save()

  const lang = useGlobalLang()
  state.ctx.font = state.breakpoints.md ? '16px sans-serif' : '14px sans-serif'

  const text = '❮'
  const textMetrics = state.ctx.measureText(text)

  const marginL = 25
  const marginR = 72
  const marginT = 10
  const width = textMetrics.width
  const height = 36
  const x = marginL
  const y = marginT

  state.ctx.beginPath()
  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const radius = 20
  const rect: Rect = [x - radius / 2, y, radius * 2, radius * 2]
  // state.ctx.strokeRect(...rect)
  state.ctx.lineWidth = 1
  state.ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2)
  state.ctx.stroke()
  const textOffset = 13
  state.ctx.fillText(text, x, y + height - textOffset)

  state.buttons.set('back', {
    rect,
    handler: (state) => {
      const path = state.historyPaths.pop()
      if (path) {
        state.path = path
      }
    },
  })

  state.ctx.restore()
}
