import { State } from '../State'
import { renderStackEntry } from './renderStackEntry'

export function renderStack(state: State): void {
  for (const [i, value] of state.mod.env.stack.entries()) {
    renderStackEntry(state, i, value)
  }
}
