import { presentWordAsEnv } from '@cicada-lang/inet'
import { State } from '../../State'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'

export function selectWord(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      if (name === givenName) {
        const env = presentWordAsEnv(state.mod, name)
        const layout = createRandomNetLayout(env.net, {
          x: state.width / 6,
          y: state.height / 6,
          width: (state.width * 4) / 6,
          height: (state.height * 4) / 6,
        })

        state.wordState.selectedWord = {
          name,
          definition,
          rendering: createNetRendering('word/selected-net', env.net, layout),
        }
      }
    }
  }
}
