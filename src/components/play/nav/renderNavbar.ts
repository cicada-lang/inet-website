import { State } from '../State'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavbar(state: State): void {
  state.ctx.save()

  const marginT = 5

  state.ctx.translate(0, marginT)

  renderButtonTypes(state)
  renderButtonNodes(state)
  renderButtonWords(state)

  state.ctx.restore()
}
