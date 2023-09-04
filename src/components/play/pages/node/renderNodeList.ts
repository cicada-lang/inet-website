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

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is NodeDefinition =>
      definition['@kind'] === 'NodeDefinition',
  )

  for (const [i, definition] of definitions.entries()) {
    renderNodeListEntry(state, i, definition, {
      height,
      marginT,
    })
  }

  state.ctx.restore()
}
