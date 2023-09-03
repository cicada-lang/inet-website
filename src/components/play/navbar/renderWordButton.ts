import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { createButton } from '../button/createButton'
import { themeFontSize } from '../theme/themeFontSize'

export function renderWordButton(
  state: State,
  options: {
    height: number
    marginT: number
  },
): void {
  const { height, marginT } = options

  const lang = useGlobalLang()
  const text = lang.isZh() ? `词汇` : `Word`

  const x = state.width
  const y = height * 2 + marginT

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  const name = 'words'

  createButton(state, text, x, y, {
    name,
    height,
    align: 'right',
    isActive: (state) => state.currentRoute.name === name,
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
