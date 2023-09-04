import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { renderLabel } from '../../components/label/renderLabel'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'

export function renderLocalsLabel(
  state: State,
  options: { marginT: number },
): void {
  const { marginT } = options

  const height = themeSize(10)

  const lang = useGlobalLang()

  const text = lang.isZh() ? '局部变元' : 'Locals'
  const x = 0
  const y = marginT

  state.ctx.font = state.breakpoints.lg
    ? `bold ${themeFontSize('lg')} monospace`
    : `bold ${themeFontSize('base')} monospace`

  renderLabel(state, {
    text,
    x,
    y,
    height,
  })
}
