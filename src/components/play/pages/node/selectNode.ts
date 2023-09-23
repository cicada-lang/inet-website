import { findNodeRuleEntries, presentNode } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'
import { selectRule } from './selectRule'

export function selectNode(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      if (name === givenName) {
        const ruleEntries = findNodeRuleEntries(state.mod, {
          modId: definition.mod.url.href,
          name: definition.name,
        })

        const net = presentNode(state.mod, name)
        const x = state.width / 3
        const y = state.height / 12
        const width = state.width / 3
        const height = state.height / 3
        const layout = createRandomNetLayout(net, { x, y, width, height })

        state.nodeState.selectedNode = {
          name,
          definition,
          rendering: createNetRendering('node/selected-node-net', net, layout),
          ruleEntries,
        }

        const [firstRuleEntry] = ruleEntries
        if (firstRuleEntry) {
          selectRule(state, state.nodeState.selectedNode, firstRuleEntry.name)
        }
      }
    }
  }
}
