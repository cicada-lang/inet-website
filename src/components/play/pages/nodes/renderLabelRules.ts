import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabel } from '../../utils/renderLabel'

export function renderLabelRules(state: State, i: number): void {
  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '规则列表' : 'Rules'
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.md
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, text, x, y, {
    height,
  })
}
