import { findNodeRuleEntries } from '@cicada-lang/inet'
import { State } from '../../State'
import { selectRule } from './selectRule'

export function selectNode(state: State, givenName: string): void {
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      if (name === givenName) {
        const ruleEntries = findNodeRuleEntries(state.mod, {
          url: definition.mod.url,
          name: definition.name,
        })

        state.selectedNode = { name, definition, ruleEntries }

        const [firstRuleEntry] = ruleEntries
        if (firstRuleEntry) {
          selectRule(state, state.selectedNode, firstRuleEntry.name)
        }
      }
    }
  }
}
