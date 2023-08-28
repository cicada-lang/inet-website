import { NodeDefinition } from '@cicada-lang/inet/lib/lang/definition'
import { State } from '../../State'

export function findCurrentNodeDefinition(
  state: State,
): NodeDefinition | undefined {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      if (name === state.currentRoute.properties?.name) {
        return definition
      }
    }
  }
}
