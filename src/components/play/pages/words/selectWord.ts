import { State } from '../../State'

export function selectWord(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      if (name === givenName) {
        state.selectedWord = { name, definition }
      }
    }
  }
}
