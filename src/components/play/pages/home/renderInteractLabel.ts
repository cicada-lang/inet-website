import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderLabel } from '../../components/label/renderLabel'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderInteractLabel(state: State, i: number): void {
  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '反应' : 'Interact'
  const x = state.width
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, {
    text,
    x,
    y,
    align: 'right',
    height,
  })
}
