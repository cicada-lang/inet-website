import { SelectedNode } from './SelectedNode'
import { SelectedRule } from './SelectedRule'

export type NodeState = {
  selectedNode?: SelectedNode
  selectedRule?: SelectedRule
  nodesInViewLength: number
  nodesScrollCursor?: number
  rulesInViewLength: number
}
