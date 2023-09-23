import { presentRule } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'
import { SelectedNode } from './SelectedNode'

export function selectRule(
  state: State,
  selectedNode: SelectedNode,
  name: string,
): void {
  for (const ruleEntry of selectedNode.ruleEntries) {
    const [initialNet, finalNet] = presentRule(state.mod, name)

    const width = (state.width * 3) / 8
    const height = state.height / 2

    const initialX = (state.width * 2) / 8
    const initialY = state.height / 2
    const initial = createNetRendering(
      'rule/selected-initial-net',
      initialNet,
      createRandomNetLayout(initialNet, {
        x: initialX,
        y: initialY,
        width,
        height,
      }),
    )

    const finalX = (state.width * 5) / 8
    const finalY = state.height / 2
    const final = createNetRendering(
      'rule/selected-final-net',
      finalNet,
      createRandomNetLayout(finalNet, {
        x: finalX,
        y: finalY,
        width,
        height,
      }),
    )

    state.nodeState.selectedRule = {
      name,
      rule: ruleEntry,
      initial,
      final,
    }
  }
}
