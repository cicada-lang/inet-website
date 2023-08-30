import { State } from '../../State'

export function selectFirstType(state: State): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      state.selectedType = { name, definition }
    }
  }
}
