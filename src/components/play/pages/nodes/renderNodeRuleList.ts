import { State } from '../../State'
import { createButton } from '../../button/createButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { SelectedNode } from './SelectedNode'
import { renderRulesLabel } from './renderRulesLabel'
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
    createButton(state, name, 0, state.height - height - height * i, {
      name: `rules/${name}`,
      height,
      isActive: (state) => state.selectedNode?.selectedRule?.name === name,
      isDisabled: (state) => state.selectedNode?.selectedRule?.name === name,
      handler: (state) => selectRule(state, selectedNode, name),
    })

    i++
  }

  state.ctx.restore()

  renderRulesLabel(state, selectedNode.ruleEntries.length)
}
