import { useGlobalLang } from '../../../lang/useGlobalLang'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderButton } from '../button/renderButton'

export function renderToggleUIButton(state: State): void {
  const lang = useGlobalLang()

  const hideText = lang.isZh() ? `隐藏 UI` : `Hide UI`
  const showText = lang.isZh() ? `显示 UI` : `Show UI`
  const text = state.isHidingUI ? showText : hideText

  const height = themeSize(10)

  const x = state.width
  const y = 0

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: 'toggleUI',
    text,
    x,
    y,
    height,
    align: 'right',
    onClick: (state) => {
      state.isHidingUI = !state.isHidingUI
    },
  })
}
