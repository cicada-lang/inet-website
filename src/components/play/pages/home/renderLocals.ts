import { State } from '../../State'
import { renderLocalEntry } from './renderLocalEntry'
import { renderLocalsLabel } from './renderLocalsLabel'

export function renderLocals(state: State): void {
  if (state.mod.env.locals.size > 0) {
    renderLocalsLabel(state)
  }

  let i = 0
  for (const [name, value] of state.mod.env.locals.entries()) {
    renderLocalEntry(state, i, name, value)
    i++
  }
}
