import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { SelectedNode } from './SelectedNode'
import { renderNodeRuleListLabel } from './renderNodeRuleListLabel'
import { selectRule } from './selectRule'

export function renderNodeRuleList(
  state: State,
  selectedNode: SelectedNode,
): void {
  state.ctx.save()

  const height = themeSize(10)

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const { name } of [...selectedNode.ruleEntries].reverse()) {
    renderButton(state, {
      name: `rules/${name}`,
      text: name,
      x: 0,
      y: state.height - height - height * i,
      height,
      isActive: (state) => state.nodeState.selectedRule?.name === name,
      isDisabled: (state) => state.nodeState.selectedRule?.name === name,
      handler: (state) => selectRule(state, selectedNode, name),
    })

    i++
  }

  state.ctx.restore()

  renderNodeRuleListLabel(state, selectedNode.ruleEntries.length)
}
