import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { SelectedNode } from './SelectedNode'
import { selectRule } from './selectRule'

export function renderNodeRuleList(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  const height = themeSize(10)

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const { name } of [...selectedNode.ruleEntries].reverse()) {
    renderButton(state, name, 0, state.height - height - height * i, {
      name: `rules/${name}`,
      height,
      paddingX: themeSize(3),
      isActive: (state) => state.selectedNode?.selectedRule?.name === name,
      isDisabled: (state) => state.selectedNode?.selectedRule?.name === name,
      activeUnderline: { offset: 8, width: 1.5 },
      handler: (state) => selectRule(state, selectedNode, name),
    })

    i++
  }

  state.ctx.restore()
}
