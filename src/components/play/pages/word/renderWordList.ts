import { WordDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderWordListEntry } from './renderWordListEntry'
import { renderWordListLabel } from './renderWordListLabel'

export function renderWordList(state: State): void {
  renderWordListLabel(state)

  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is WordDefinition =>
      definition['@kind'] === 'WordDefinition',
  )

  for (const [i, definition] of definitions.entries()) {
    renderWordListEntry(state, i, definition, {
      height,
      marginT,
    })
  }
}
