import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { themeFontSans } from '../utils/themeFontSans'

export function renderButtonWords(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `词` : `Words`
  const paddingX = 10
  const marginT = 5
  const height = 34
  const x = state.width
  const y = height * 2 + marginT
  const name = 'words'

  themeFontSans(state, 'base')

  renderButton(state, text, x, y, {
    name,
    height,
    paddingX,
    align: 'right',
    isActive: (state) => state.currentRoute.name === name,
    activeUnderline: { offset: 8, width: 1.5 },
    handler: (state) => {
      if (state.currentRoute.name === 'home') {
        state.history.push(state.currentRoute)
      }

      if (state.currentRoute.name !== name) {
        state.currentRoute = { name }
      }
    },
  })
}
