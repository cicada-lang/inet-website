import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { SelectedNode } from './SelectedNode'
import { renderNodeRuleListEntry } from './renderNodeRuleListEntry'
import { renderNodeRuleListLabel } from './renderNodeRuleListLabel'

export function renderNodeRuleList(
  state: State,
  selectedNode: SelectedNode,
): void {
  const inViewLength = state.nodeState.rulesInViewLength

  renderNodeRuleListLabel(
    state,
    Math.min(selectedNode.ruleEntries.length, inViewLength),
  )

  const height = themeSize(10)

  const ruleEntries = [...selectedNode.ruleEntries].reverse()

  if (ruleEntries.length > inViewLength) {
    const marginL = themeSize(10)
    const length = ruleEntries.length
    const cursor = selectedNode.rulesScrollCursor || 0

    renderScrollbar(state, {
      name: 'rules-scrollbar',
      x: 0,
      y: state.height - height * inViewLength,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        selectedNode.rulesScrollCursor = cursor
      },
    })

    for (const [i, ruleEntry] of ruleEntries
      .slice(length - inViewLength - cursor, length - cursor)
      .entries()) {
      renderNodeRuleListEntry(state, selectedNode, i, ruleEntry, {
        height,
        marginL,
      })
    }
  } else {
    for (const [i, ruleEntry] of ruleEntries.entries()) {
      renderNodeRuleListEntry(state, selectedNode, i, ruleEntry, {
        height,
        marginL: 0,
      })
    }
  }
}
