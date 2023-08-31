import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { themeFontSize } from '../theme/themeFontSize'

export function renderButtonType(
  state: State,
  options: {
    height: number
    marginT: number
  },
): void {
  const { height, marginT } = options

  const lang = useGlobalLang()
  const text = lang.isZh() ? `类型` : `Type`

  const x = state.width
  const y = 0 + marginT

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  const name = 'types'

  renderButton(state, text, x, y, {
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