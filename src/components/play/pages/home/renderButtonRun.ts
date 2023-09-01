import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { NetRendering } from '../../net/NetRendering'
import { runAllSteps } from '../../net/runAllSteps'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderButtonRun(state: State, rendering: NetRendering): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `运行` : `Run`
  const height = themeSize(10)
  const x = state.width
  const y = state.height - height * 2

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: 'step',
    align: 'right',
    height,
    handler: (state) => runAllSteps(state, rendering),
  })
}
