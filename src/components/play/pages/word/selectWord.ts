import { createEnv, presentFunction } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { createEnvRendering } from '../../components/env/createEnvRendering'
import { maybeSelectTopValue } from '../../components/env/maybeSelectTopValue'

export function selectWord(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'FunctionDefinition') {
      if (name === givenName) {
        const net = presentFunction(state.mod, name)
        const envRendering = createEnvRendering({
          name: `word/selected-word/${name}`,
          env: createEnv(state.mod, { net }),
          x: 0,
          y: 0,
          width: state.width,
          height: state.height,
        })

        maybeSelectTopValue(envRendering)

        state.wordState.selectedWord = {
          name,
          definition,
          envRendering,
        }
      }
    }
  }
}
