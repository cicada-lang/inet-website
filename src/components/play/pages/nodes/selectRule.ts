import { presentRuleAsNets } from '@cicada-lang/inet'
import { State } from '../../State'
import { createRandomNetLayout } from '../../net-layout/createRandomNetLayout'
import { createNetRendering } from '../../net-rendering/createNetRendering'
import { SelectedNode } from './SelectedNode'

export function selectRule(
  state: State,
  selectedNode: SelectedNode,
  name: string,
): void {
  for (const ruleEntry of selectedNode.ruleEntries) {
    const [initialNet, finalNet] = presentRuleAsNets(state.mod, name)

    const initial = createNetRendering(
      initialNet,
      createRandomNetLayout(
        initialNet,
        state.width / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
    )

    const final = createNetRendering(
      finalNet,
      createRandomNetLayout(
        finalNet,
        (state.width * 2) / 3,
        (state.height * 2) / 3,
        state.width / 3,
        state.height / 3,
      ),
    )

    selectedNode.selectedRule = {
      name,
      rule: ruleEntry,
      initial,
      final,
    }
  }
}
