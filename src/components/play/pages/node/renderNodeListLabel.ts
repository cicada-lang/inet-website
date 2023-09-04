import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderLabel } from '../../components/label/renderLabel'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderNodeListLabel(state: State): void {
  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '节点列表' : 'Nodes'
  const x = 0
  const y = height

  state.ctx.font = state.breakpoints.lg
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, { text, x, y, height })
}
