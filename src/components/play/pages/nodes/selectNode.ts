import { State } from '../../State'

export function selectNode(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      if (name === givenName) {
        state.selectedNode = { name, definition }
      }
    }
  }
}
