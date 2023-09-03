import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { createButton } from '../button/createButton'
import { themeFontSize } from '../theme/themeFontSize'
import { themeSize } from '../theme/themeSize'

export function renderBackButton(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `返回` : `Back`
  const height = themeSize(10)
  const x = 0
  const y = 0

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  createButton(state, text, x, y, {
    name: 'back',
    height,
    handler: (state) => {
      const path = state.history.pop()
      if (path) {
        state.currentRoute = path
      }
    },
  })
}
