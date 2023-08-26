import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'

export function renderButtonWords(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `词` : `Words`
  const paddingX = 10
  const height = 34
  const x = state.width
  const y = height * 2
  const name = 'words'

  renderButton(state, text, x, y, {
    name,
    height,
    paddingX,
    align: 'right',
    font: state.breakpoints.md ? '18px sans-serif' : '16px sans-serif',
    isActive: (state) => state.path === name,
    activeUnderline: { offset: 8, width: 1.5 },
    handler: (state) => {
      if (state.path !== name) {
        state.historyPaths.push(state.path)
      }

      state.path = name
    },
  })
}
