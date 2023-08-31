import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabelNodes } from './renderLabelNodes'
import { selectNode } from './selectNode'

export function renderNodeList(state: State): void {
  renderLabelNodes(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2 + themeSize(4)

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'NodeDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `nodes/${name}`,
        height,
        paddingX: themeSize(3),
        isActive: (state) => state.selectedNode?.name === name,
        isDisabled: (state) => state.selectedNode?.name === name,
        activeUnderline: { offset: 8, width: 1.5 },
        handler: (state) => selectNode(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
