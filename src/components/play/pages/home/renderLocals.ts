import { State } from '../../State'
import { renderLocalEntry } from './renderLocalEntry'

export function renderLocals(state: State): void {
  let i = 0
  for (const [name, value] of state.mod.env.locals.entries()) {
    renderLocalEntry(state, i, name, value)
    i++
  }
}
