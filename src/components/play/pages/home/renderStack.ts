import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderStackEntry } from './renderStackEntry'
import { renderStackLabel } from './renderStackLabel'

export function renderStack(state: State): void {
  const height = themeSize(10)

  for (const [i, value] of state.mod.env.stack.entries()) {
    renderStackEntry(state, i, value, { height })
  }

  if (state.mod.env.stack.length > 0) {
    renderStackLabel(state, state.mod.env.stack.length, { height })
  }
}
