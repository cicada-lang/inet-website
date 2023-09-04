import { TypeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderTypeListEntry } from './renderTypeListEntry'
import { renderTypeListLabel } from './renderTypeListLabel'

export function renderTypeList(state: State): void {
  renderTypeListLabel(state)

  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is TypeDefinition =>
      definition['@kind'] === 'TypeDefinition',
  )

  for (const [i, definition] of definitions.entries()) {
    renderTypeListEntry(state, i, definition, { height, marginT })
  }
}
