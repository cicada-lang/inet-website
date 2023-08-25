import { State } from '../../State'
import { renderNavCircle } from '../../nav/renderNavCircle'
import { RenderOptions } from '../../route/Route'

export function renderTypeDefinitions(
  state: State,
  options: RenderOptions,
): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderNavCircle(state)

  state.ctx.fillText('types', state.width / 4, state.height / 2)
}
