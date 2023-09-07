import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderButton } from '../button/renderButton'

export function renderBackButton(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `返回` : `Back`
  const height = themeSize(10)
  const x = 0
  const y = 0

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: 'back',
    text,
    x,
    y,
    height,
    onClick: (state) => {
      const route = state.history.pop()
      if (route) {
        state.currentRoute = route
      }
    },
  })
}
