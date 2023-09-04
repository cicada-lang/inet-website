import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderWordListEntry } from './renderWordListEntry'
import { renderWordListLabel } from './renderWordListLabel'

export function renderWordList(state: State): void {
  renderWordListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  const definitionEntries = Array.from(state.mod.definitions.entries())

  for (const [i, [name, definition]] of definitionEntries.entries()) {
    if (definition['@kind'] === 'WordDefinition') {
      renderWordListEntry(state, i, name, definition, {
        height,
        marginT,
      })
    }
  }

  state.ctx.restore()
}
