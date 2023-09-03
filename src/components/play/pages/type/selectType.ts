import { State } from '../../State'

export function selectType(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      if (name === givenName) {
        state.typeState.selectedType = { name, definition }
      }
    }
  }
}
