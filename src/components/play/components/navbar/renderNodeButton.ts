import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { renderButton } from '../button/renderButton'

export function renderNodeButton(
  state: State,
  options: {
    height: number
    marginT: number
  },
): void {
  const { height, marginT } = options

  const lang = useGlobalLang()
  const text = lang.isZh() ? `节点` : `Node`

  const x = state.width
  const y = height + marginT

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  const name = 'node'

  renderButton(state, {
    name,
    text,
    x,
    y,
    height,
    align: 'right',
    isActive: (state) => state.currentRoute.name === name,
    onClick: (state) => {
      if (state.currentRoute.name === 'home') {
        state.history.push(state.currentRoute)
      }

      if (state.currentRoute.name !== name) {
        state.currentRoute = { name }
      }
    },
  })
}
