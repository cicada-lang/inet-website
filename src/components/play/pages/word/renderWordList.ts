import { WordDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderWordListEntry } from './renderWordListEntry'
import { renderWordListLabel } from './renderWordListLabel'

export function renderWordList(state: State): void {
  renderWordListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  const definitionEntries = Array.from(state.mod.definitions.entries())
    .filter(
      (entry): entry is [string, WordDefinition] =>
        entry[1]['@kind'] === 'WordDefinition',
    )
    .entries()

  for (const [i, [name, definition]] of definitionEntries) {
    renderWordListEntry(state, i, name, definition, {
      height,
      marginT,
    })
  }

  state.ctx.restore()
}
