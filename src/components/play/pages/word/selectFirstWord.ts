import { State } from '../../State'
import { selectWord } from './selectWord'

export function selectFirstWord(state: State): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      selectWord(state, name)
      return
    }
  }
}
