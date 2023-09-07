import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { NetRendering } from '../../components/net/NetRendering'
import { runOneStep } from '../../components/net/runOneStep'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderStepButton(state: State, rendering: NetRendering): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `一步` : `Step`
  const height = themeSize(10)
  const x = state.width
  const y = state.height - height

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `${rendering.name}/step`,
    text,
    x,
    y,
    align: 'right',
    height,
    onClick: (state) => runOneStep(state, rendering),
  })
}
