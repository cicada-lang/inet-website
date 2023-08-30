import { presentRuleAsNets } from '@cicada-lang/inet'
import { State } from '../../State'
import { createRandomNetLayout } from '../../net-layout/createRandomNetLayout'
import { SelectedNode } from './SelectedNode'

export function selectRule(
  state: State,
  selectedNode: SelectedNode,
  name: string,
): void {
  for (const ruleEntry of selectedNode.ruleEntries) {
    const [initialNet, finalNet] = presentRuleAsNets(state.mod, name)

    const initial = {
      net: initialNet,
      layout: createRandomNetLayout(
        initialNet,
        state.width / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
      step: 0,
    }

    const final = {
      net: finalNet,
      layout: createRandomNetLayout(
        finalNet,
        (state.width * 2) / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
      step: 0,
    }

    selectedNode.selectedRule = {
      name,
      rule: ruleEntry,
      initial,
      final,
    }
  }
}
