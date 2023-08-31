import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { fontSize } from '../../theme/fontSize'
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
    ? `bold ${fontSize('base')} sans-serif`
    : `bold ${fontSize('sm')} sans-serif`

  // state.ctx.font = state.breakpoints.md
  //   ? themeFontSans('base')
  //   : themeFontSans('sm')

  renderLabel(state, text, x, y, {
    height,
    paddingX,
  })
}
