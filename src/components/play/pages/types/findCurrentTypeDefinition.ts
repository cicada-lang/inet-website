import { TypeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'

export function findCurrentTypeDefinition(
  state: State,
): TypeDefinition | undefined {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      if (name === state.selectedType?.name) {
        return definition
      }
    }
  }
}
