import { State } from '../../State'

export function selectType(state: State, typeName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      if (name === typeName) {
        state.selectedType = { name, definition }
      }
    }
  }
}
