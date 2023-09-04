import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderTypeListEntry } from './renderTypeListEntry'
import { renderTypeListLabel } from './renderTypeListLabel'

export function renderTypeList(state: State): void {
  renderTypeListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  const definitionEntries = Array.from(
    state.mod.definitions.entries(),
  ).entries()

  for (const [i, [name, definition]] of definitionEntries) {
    if (definition['@kind'] === 'TypeDefinition') {
      renderTypeListEntry(state, i, name, definition, { height, marginT })
    }
  }

  state.ctx.restore()
}
