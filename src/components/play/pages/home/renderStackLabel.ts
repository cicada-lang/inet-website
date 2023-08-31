import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSans } from '../../theme/themeFontSans'
import { renderLabel } from '../../utils/renderLabel'

export function renderStackLabel(
  state: State,
  i: number,
  options: {
    height: number
    paddingX: number
  },
): void {
  const { height, paddingX } = options

  const lang = useGlobalLang()

  const text = lang.isZh() ? '栈' : 'Stack'
  const x = 0
  const y = state.height - height * (i + 1)

  state.ctx.font = state.breakpoints.md
    ? 'bold ' + themeFontSans('base')
    : 'bold ' + themeFontSans('sm')

  // state.ctx.font = state.breakpoints.md
  //   ? themeFontSans('base')
  //   : themeFontSans('sm')

  renderLabel(state, text, x, y, {
    height,
    paddingX,
  })
}
