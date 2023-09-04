import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderLabel } from '../../components/label/renderLabel'
import { themeFontSize } from '../../theme/themeFontSize'

export function renderStackLabel(
  state: State,
  i: number,
  options: {
    height: number
  },
): void {
  const { height } = options

  const lang = useGlobalLang()

  const text = lang.isZh() ? '栈' : 'Stack'
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, {
    text,
    x,
    y,
    height,
  })
}
