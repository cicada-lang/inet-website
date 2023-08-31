import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { themeFontSize } from '../theme/themeFontSize'
import { themeSize } from '../theme/themeSize'
import { renderLabel } from '../utils/renderLabel'

export function renderLabelDefinitions(state: State): void {
  const height = themeSize(10)
  const paddingX = themeSize(3)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '定义' : 'Definitions'
  const x = state.width
  const y = height + themeSize(4)

  state.ctx.font = state.breakpoints.md
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, text, x, y, {
    height,
    align: 'right',
    paddingX,
  })
}
