import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { NetRendering } from '../../net/NetRendering'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabel } from '../../utils/renderLabel'

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

  renderLabel(state, text, x, y, {
    align: 'right',
    height,
  })
}
