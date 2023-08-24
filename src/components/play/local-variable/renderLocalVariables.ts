import { State } from '../State'
import { renderLocalVariableEntry } from './renderLocalVariableEntry'

export function renderLocalVariables(state: State): void {
  for (const [name, value] of state.mod.env.locals) {
    renderLocalVariableEntry(state, name, value)
  }
}
