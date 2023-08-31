import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { themeFontSize } from '../theme/themeFontSize'

export function renderButtonBack(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `返回` : `Back`
  const paddingX = 10
  const height = 34
  const x = 0
  const y = 0

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: 'back',
    height,
    paddingX,
    handler: (state) => {
      const path = state.history.pop()
      if (path) {
        state.currentRoute = path
      }
    },
  })
}
