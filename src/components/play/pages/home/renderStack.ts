import { State } from '../../State'
import { renderStackEntry } from './renderStackEntry'
import { renderStackLabel } from './renderStackLabel'

export function renderStack(state: State): void {
  const height = 34
  const paddingX = 10

  for (const [i, value] of state.mod.env.stack.entries()) {
    renderStackEntry(state, i, value, { height, paddingX })
  }

  renderStackLabel(state, state.mod.env.stack.length, { height, paddingX })
}
