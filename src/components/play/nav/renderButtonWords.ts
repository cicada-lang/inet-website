import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { fontSize } from '../theme/fontSize'

export function renderButtonWords(
  state: State,
  options: {
    height: number
    paddingX: number
    marginT: number
  },
): void {
  const { height, marginT, paddingX } = options

  const lang = useGlobalLang()
  const text = lang.isZh() ? `词` : `Words`

  const x = state.width
  const y = height * 2 + marginT

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('lg')} monospace`
    : `${fontSize('base')} monospace`

  const name = 'words'

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
