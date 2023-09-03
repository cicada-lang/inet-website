import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { createButton } from '../../button/createButton'
import { NetRendering } from '../../net/NetRendering'
import { runAllSteps } from '../../net/runAllSteps'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderRunButton(state: State, rendering: NetRendering): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `运行` : `Run`
  const height = themeSize(10)
  const x = state.width
  const y = state.height - height * 2

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  createButton(state, text, x, y, {
    name: 'run',
    align: 'right',
    height,
    handler: (state) => runAllSteps(state, rendering),
  })
}
