import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'

export function renderButtonBack(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `返回` : `Back`
  const paddingX = 10
  const height = 34
  const marginT = 5
  const x = 0
  const y = marginT

  renderButton(state, text, x, y, {
    name: 'back',
    height,
    paddingX,
    font: state.breakpoints.md ? '18px sans-serif' : '16px sans-serif',
    handler: (state) => {
      const path = state.history.pop()
      if (path) {
        state.currentRoute = path
      }
    },
  })
}
