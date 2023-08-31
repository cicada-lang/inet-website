import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabel } from '../../utils/renderLabel'

export function renderLabelTypes(state: State): void {
  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '类型列表' : 'Types'
  const x = 0
  const y = height + themeSize(4)

  state.ctx.font = state.breakpoints.md
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, text, x, y, {
    height,
  })
}
