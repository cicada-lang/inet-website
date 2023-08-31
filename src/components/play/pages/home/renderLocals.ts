import { State } from '../../State'
import { renderLabelLocals } from './renderLabelLocals'
import { renderLocalEntry } from './renderLocalEntry'

export function renderLocals(state: State): void {
  renderLabelLocals(state)

  let i = 0
  for (const [name, value] of state.mod.env.locals.entries()) {
    renderLocalEntry(state, i, name, value)
    i++
  }
}
