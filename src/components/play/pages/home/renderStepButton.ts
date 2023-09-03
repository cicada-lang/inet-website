import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { NetRendering } from '../../net/NetRendering'
import { runOneStep } from '../../net/runOneStep'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderStepButton(state: State, rendering: NetRendering): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `一步` : `Step`
  const height = themeSize(10)
  const x = state.width
  const y = state.height - height

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: 'step',
    align: 'right',
    height,
    handler: (state) => runOneStep(state, rendering),
  })
}
