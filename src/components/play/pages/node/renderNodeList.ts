import { NodeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeSize } from '../../theme/themeSize'
import { renderNodeListEntry } from './renderNodeListEntry'
import { renderNodeListLabel } from './renderNodeListLabel'

export function renderNodeList(state: State): void {
  renderNodeListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  const definitionEntries = Array.from(state.mod.definitions.entries())
    .filter(
      (entry): entry is [string, NodeDefinition] =>
        entry[1]['@kind'] === 'NodeDefinition',
    )
    .entries()

  for (const [i, [name, definition]] of definitionEntries) {
    renderNodeListEntry(state, i, name, definition, {
      height,
      marginT,
    })
  }

  state.ctx.restore()
}
