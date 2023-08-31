import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderLabelStack } from './renderLabelStack'
import { renderStackEntry } from './renderStackEntry'

export function renderStack(state: State): void {
  const height = themeSize(10)

  for (const [i, value] of state.mod.env.stack.entries()) {
    renderStackEntry(state, i, value, { height })
  }

  renderLabelStack(state, state.mod.env.stack.length, { height })
}
