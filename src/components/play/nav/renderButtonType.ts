import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { themeFontSize } from '../theme/themeFontSize'

export function renderButtonType(
  state: State,
  options: {
    height: number
    paddingX: number
    marginT: number
  },
): void {
  const { height, marginT, paddingX } = options

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
