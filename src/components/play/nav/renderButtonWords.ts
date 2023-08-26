import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'

export function renderButtonWords(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `词` : `Words`
  const paddingX = 10
  const marginT = 5
  const height = 34
  const x = state.width
  const y = height * 2 + marginT
  const name = 'words'

  renderButton(state, text, x, y, {
    name,
    height,
    paddingX,
    align: 'right',
    font: state.breakpoints.md ? '18px sans-serif' : '16px sans-serif',
    isActive: (state) => state.currentRoute.name === name,
    activeUnderline: { offset: 8, width: 1.5 },
    handler: (state) => {
      if (state.currentRoute.name === "home") {
        state.history.push(state.currentRoute)
      }

      state.currentRoute = { name }
    },
  })
}
