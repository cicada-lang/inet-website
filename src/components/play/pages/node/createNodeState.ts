import { NodeState } from './NodeState'

export function createNodeState(): NodeState {
  return {
    nodesInViewLength: 6,
    rulesInViewLength: 6,
  }
}
