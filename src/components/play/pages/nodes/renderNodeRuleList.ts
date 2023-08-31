import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { fontSize } from '../../theme/fontSize'
import { SelectedNode } from './SelectedNode'
import { selectRule } from './selectRule'

export function renderNodeRuleList(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  const height = 34

  state.ctx.font = state.breakpoints.md
    ? `${fontSize('lg')} sans-serif`
    : `${fontSize('base')} sans-serif`

  let i = 0
  for (const { name } of [...selectedNode.ruleEntries].reverse()) {
    renderButton(state, name, 0, state.height - height - height * i, {
      name: `rules/${name}`,
      height,
      paddingX: 10,
      isActive: (state) => state.selectedNode?.selectedRule?.name === name,
      isDisabled: (state) => state.selectedNode?.selectedRule?.name === name,
      activeUnderline: { offset: 8, width: 1.5 },
      handler: (state) => selectRule(state, selectedNode, name),
    })

    i++
  }

  state.ctx.restore()
}
