import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderLabel } from '../../components/label/renderLabel'
import { NetRendering } from '../../components/net/NetRendering'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderStepCounterLabel(
  state: State,
  rendering: NetRendering,
  i: number,
): void {
  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh()
    ? `步数：${rendering.runningStep}`
    : `steps: ${rendering.runningStep}`

  const x = state.width
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderLabel(state, {
    text,
    x,
    y,
    align: 'right',
    height,
  })
}
