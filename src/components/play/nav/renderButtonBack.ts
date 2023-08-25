import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { Rect } from '../button/Rect'

export function renderButtonBack(state: State): void {
  state.ctx.save()

  const lang = useGlobalLang()
  state.ctx.font = state.breakpoints.md ? '16px sans-serif' : '14px sans-serif'

  const text = lang.isZh() ? `返回` : `Back`
  const textMetrics = state.ctx.measureText(text)

  const height = 34

  const marginL = 10
  const marginT = 5
  const width = textMetrics.width

  const x = marginL
  const y = marginT

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const rect: Rect = [x, y, width, height]
  // state.ctx.strokeRect(...rect)
  state.ctx.lineWidth = 1
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
