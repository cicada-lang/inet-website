import { findNodeRuleEntries, presentNodeAsNet } from '@cicada-lang/inet'
import { State } from '../../State'
import { createNetRendering } from '../../net/createNetRendering'
import { createRandomNetLayout } from '../../net/createRandomNetLayout'
import { selectRule } from './selectRule'

export function selectNode(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      if (name === givenName) {
        const ruleEntries = findNodeRuleEntries(state.mod, {
          url: definition.mod.url,
          name: definition.name,
        })

        const net = presentNodeAsNet(state.mod, name)
        const layout = createRandomNetLayout(
          net,
          state.width / 3,
          state.height / 5,
          state.width / 3,
          state.height / 3,
        )

        state.selectedNode = {
          name,
          definition,
          rendering: createNetRendering(net, layout),
          ruleEntries,
        }

        const [firstRuleEntry] = ruleEntries
        if (firstRuleEntry) {
          selectRule(state, state.selectedNode, firstRuleEntry.name)
        }
      }
    }
  }
}
