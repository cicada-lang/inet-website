import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { NetRendering } from '../../components/net/NetRendering'
import { runAllSteps } from '../../components/net/runAllSteps'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderRunButton(state: State, rendering: NetRendering): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `运行` : `Run`
  const height = themeSize(10)
  const x = state.width
  const y = state.height - height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `${rendering.name}/run`,
    text,
    x,
    y,
    align: 'right',
    height,
    onClick: (state) => runAllSteps(state, rendering),
  })
}
