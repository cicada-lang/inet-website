import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'
import { renderTypeDefinitionList } from './renderTypeDefinitionList'

export function renderTypes(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  renderNavbar(state)
  if (state.history.length > 0) {
    renderButtonBack(state)
  }

  renderTypeDefinitionList(state)
}
