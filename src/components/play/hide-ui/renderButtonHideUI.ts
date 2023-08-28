import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { themeFontSans } from '../theme/themeFontSans'

export function renderButtonHideUI(state: State): void {
  const lang = useGlobalLang()
  const text = lang.isZh() ? `隐藏 UI` : `Hide UI`

  const paddingX = 10
  const marginT = 5
  const height = 34

  const x = state.width
  const y = marginT

  state.ctx.font = state.breakpoints.md
    ? themeFontSans('lg')
    : themeFontSans('base')

  renderButton(state, text, x, y, {
    name: 'toggleUI',
    height,
    paddingX,
    align: 'right',
    handler: (state) => {
      state.isHidingUI = true
    },
  })
}
