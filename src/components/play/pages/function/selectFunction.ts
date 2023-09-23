import { presentFunction } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { createEnvRendering } from '../../components/env/createEnvRendering'
import { maybeSelectTopValue } from '../../components/env/maybeSelectTopValue'

export function selectFunction(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'FunctionDefinition') {
      if (name === givenName) {
        const envRendering = createEnvRendering({
          name: `function/selected-function/${name}`,
          env: presentFunction(state.mod, name),
          x: 0,
          y: 0,
          width: state.width,
          height: state.height,
        })

        maybeSelectTopValue(envRendering)

        state.functionState.selectedFunction = {
          name,
          definition,
          envRendering,
        }
      }
    }
  }
}
