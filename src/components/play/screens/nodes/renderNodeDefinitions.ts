import { State } from '../../State'
import { renderNavCircle } from '../../nav/renderNavCircle'
import { RenderOptions } from '../../route/Route'

export function renderNodeDefinitions(
  state: State,
  options: RenderOptions,
): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderNavCircle(state)

  state.ctx.fillText('nodes', state.width / 4, state.height / 2)
}
