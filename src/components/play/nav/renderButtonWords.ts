import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { Rect } from '../button/Rect'

export function renderButtonWords(state: State): void {
  state.ctx.save()

  const lang = useGlobalLang()
  state.ctx.font = state.breakpoints.md ? '16px sans-serif' : '14px sans-serif'
  const text = lang.isZh() ? `词` : `Words`
  const textMetrics = state.ctx.measureText(text)

  const height = 34


  const width = textMetrics.width
  const x = state.width - width
  const y = height * 2

  state.ctx.strokeStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
  state.ctx.lineWidth = 1

  state.ctx.beginPath()
  const rect: Rect = [x, y, width, height]
  // state.ctx.strokeRect(...rect)

  const textOffset = 13
  state.ctx.fillText(text, x, y + height - textOffset)

  if (state.path === 'words') {
    state.ctx.lineWidth = 1.5
    const underlineOffset = 8
    state.ctx.beginPath()
    state.ctx.moveTo(x, y + height - underlineOffset)
    state.ctx.lineTo(x + width, y + height - underlineOffset)
    state.ctx.stroke()
    state.buttons.delete('words')
  } else {
    state.buttons.set('words', {
      rect,
      handler: (state) => {
        state.historyPaths.push(state.path)
        state.path = 'words'
      },
    })
  }

  state.ctx.restore()
}
