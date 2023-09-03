import { State } from '../../State'
import { selectNode } from './selectNode'

export function selectFirstNode(state: State): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      selectNode(state, name)
      return
    }
  }
}
