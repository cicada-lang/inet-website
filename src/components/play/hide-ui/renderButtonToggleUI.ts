import { useGlobalLang } from '../../lang/useGlobalLang'
import { State } from '../State'
import { renderButton } from '../button/renderButton'
import { fontSize } from '../theme/fontSize'

export function renderButtonToggleUI(state: State): void {
  const lang = useGlobalLang()

  const hideText = lang.isZh() ? `隐藏 UI` : `Hide UI`
  const showText = lang.isZh() ? `显示 UI` : `Show UI`
  const text = state.isHidingUI ? showText : hideText

  const paddingX = 10
  const marginT = 5
  const height = 34

  const x = state.width
  const y = marginT

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('lg')} monospace`
    : `${fontSize('base')} monospace`

  renderButton(state, text, x, y, {
    name: 'toggleUI',
    height,
    paddingX,
    align: 'right',
    handler: (state) => {
      state.isHidingUI = !state.isHidingUI
    },
  })
}
