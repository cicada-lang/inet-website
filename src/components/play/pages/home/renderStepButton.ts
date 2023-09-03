import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { createButton } from '../../button/createButton'
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

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  createButton(state, text, x, y, {
    name: 'step',
    align: 'right',
    height,
    handler: (state) => runOneStep(state, rendering),
  })
}
