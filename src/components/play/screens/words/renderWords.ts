import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'
import { renderWordList } from './renderWordList'

export function renderWords(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (!state.isHidingUI) {
    renderWordList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
