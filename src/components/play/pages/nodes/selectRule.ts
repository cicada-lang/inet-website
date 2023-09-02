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

    const width = (state.width * 3) / 8
    const height = state.height / 2

    const initialX = (state.width * 2) / 8
    const initialY = state.height / 2
    const initial = createNetRendering(
      initialNet,
      createRandomNetLayout(initialNet, initialX, initialY, width, height),
    )

    const finalX = (state.width * 5) / 8
    const finalY = state.height / 2
    const final = createNetRendering(
      finalNet,
      createRandomNetLayout(finalNet, finalX, finalY, width, height),
    )

    selectedNode.selectedRule = {
      name,
      rule: ruleEntry,
      initial,
      final,
    }
  }
}
