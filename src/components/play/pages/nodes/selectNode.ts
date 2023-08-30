import { findNodeRuleEntries, presentNodeAsNet } from '@cicada-lang/inet'
import { State } from '../../State'
import { createRandomNetLayout } from '../../net-layout/createRandomNetLayout'
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

        const rendering = {
          net,
          layout,
          step: 0,
        }

        state.selectedNode = {
          name,
          definition,
          rendering,
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
