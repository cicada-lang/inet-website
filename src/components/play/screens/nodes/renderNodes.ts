import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'

export function renderNodes(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (!state.isHidingUI) {
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }

  state.ctx.fillText('nodes', state.width / 4, state.height / 2)
}
