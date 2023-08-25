import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'

export function renderTypeDefinitions(
  state: State,
  options: RenderOptions,
): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderNavbar(state)
  if (state.historyPaths.length > 0) {
    renderButtonBack(state)
  }

  state.ctx.fillText('types', state.width / 4, state.height / 2)
}
