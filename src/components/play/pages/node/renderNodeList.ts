import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderNodesLabel } from './renderNodesLabel'
import { selectNode } from './selectNode'

export function renderNodeList(state: State): void {
  renderNodesLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `nodes/${name}`,
        height,
        isActive: (state) => state.nodeState.selectedNode?.name === name,
        isDisabled: (state) => state.nodeState.selectedNode?.name === name,
        handler: (state) => selectNode(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
