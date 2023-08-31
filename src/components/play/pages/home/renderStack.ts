import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderStackEntry } from './renderStackEntry'
import { renderStackLabel } from './renderStackLabel'

export function renderStack(state: State): void {
  const height = themeSize(10)
  const paddingX = themeSize(3)

  for (const [i, value] of state.mod.env.stack.entries()) {
    renderStackEntry(state, i, value, { height, paddingX })
  }

  renderStackLabel(state, state.mod.env.stack.length, { height, paddingX })
}
