import { presentRuleAsNets } from '@cicada-lang/inet'
import { State } from '../../State'
import { createInitialNetLayout } from '../../net-layout/createInitialNetLayout'
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
      layout: createInitialNetLayout(
        state,
        initialNet,
        state.width / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
      evolvingStep: 0,
    }

    const final = {
      net: finalNet,
      layout: createInitialNetLayout(
        state,
        finalNet,
        (state.width * 2) / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
      evolvingStep: 0,
    }

    selectedNode.selectedRule = {
      name,
      rule: ruleEntry,
      initial,
      final,
    }
  }
}
