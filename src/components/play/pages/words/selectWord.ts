import { presentWordAsEnv } from '@cicada-lang/inet'
import { State } from '../../State'
import { createRandomNetLayout } from '../../net-layout/createRandomNetLayout'
import { createNetRendering } from '../../net-rendering/createNetRendering'

export function selectWord(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      if (name === givenName) {
        const env = presentWordAsEnv(state.mod, name)
        const layout = createRandomNetLayout(
          env.net,
          state.width / 6,
          state.height / 6,
          (state.width * 4) / 6,
          (state.height * 4) / 6,
        )

        state.selectedWord = {
          name,
          definition,
          rendering: createNetRendering(env.net, layout),
        }
      }
    }
  }
}
