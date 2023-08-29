import { WordDefinition } from '@cicada-lang/inet'
import { State } from '../../State'

export function findCurrentWordDefinition(
  state: State,
): WordDefinition | undefined {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      if (name === state.currentRoute.properties?.name) {
        return definition
      }
    }
  }
}
