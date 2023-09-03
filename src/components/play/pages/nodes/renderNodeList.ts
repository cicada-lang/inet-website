import { State } from '../../State'
import { createButton } from '../../button/createButton'
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
      createButton(state, name, 0, marginT + height * i, {
        name: `nodes/${name}`,
        height,
        isActive: (state) => state.selectedNode?.name === name,
        isDisabled: (state) => state.selectedNode?.name === name,
        handler: (state) => selectNode(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
