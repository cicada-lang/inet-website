import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { fontSize } from '../theme/fontSize'

export function renderButtonBack(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `返回` : `Back`
  const paddingX = 10
  const marginT = 5
  const height = 34
  const x = 0
  const y = marginT

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('lg')} monospace`
    : `${fontSize('base')} monospace`

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
