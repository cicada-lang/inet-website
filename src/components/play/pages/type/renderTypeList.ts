import { TypeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderTypeListEntry } from './renderTypeListEntry'
import { renderTypeListLabel } from './renderTypeListLabel'

export function renderTypeList(state: State): void {
  renderTypeListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  const definitionEntries = Array.from(state.mod.definitions.entries())
    .filter(
      (entry): entry is [string, TypeDefinition] =>
        entry[1]['@kind'] === 'TypeDefinition',
    )
    .entries()

  for (const [i, [name, definition]] of definitionEntries) {
    renderTypeListEntry(state, i, name, definition, { height, marginT })
  }

  state.ctx.restore()
}
