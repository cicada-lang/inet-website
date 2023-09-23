import { RuleEntry } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { SelectedNode } from './SelectedNode'
import { selectRule } from './selectRule'

export function renderNodeRuleListEntry(
  state: State,
  selectedNode: SelectedNode,
  i: number,
  ruleEntry: RuleEntry,
  options: {
    height: number
    marginL: number
  },
): void {
  const { height, marginL } = options
  const { name } = ruleEntry

  state.ctx.save()

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `rules/${name}`,
    text: name,
    x: marginL,
    y: state.height - height - height * i,
    height,
    isActive: (state) => state.nodeState.selectedRule?.name === name,
    isDisabled: (state) => state.nodeState.selectedRule?.name === name,
    onClick: (state) => selectRule(state, selectedNode, name),
  })

  state.ctx.restore()
}
