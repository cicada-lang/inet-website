import { presentRuleAsNets } from '@cicada-lang/inet'
import { State } from '../../State'
import { createNetRendering } from '../../net/createNetRendering'
import { createRandomNetLayout } from '../../net/createRandomNetLayout'
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
