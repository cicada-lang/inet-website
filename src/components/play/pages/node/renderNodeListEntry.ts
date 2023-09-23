import { NodeDefinition } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { selectNode } from './selectNode'

export function renderNodeListEntry(
  state: State,
  i: number,
  definition: NodeDefinition,
  options: {
    height: number
    marginT: number
    marginL: number
  },
): void {
  const { height, marginT, marginL } = options

  state.ctx.save()

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `nodes/${definition.name}`,
    text: definition.name,
    x: marginL,
    y: marginT + height * i,
    height,
    isActive: (state) => state.nodeState.selectedNode?.name === definition.name,
    isDisabled: (state) =>
      state.nodeState.selectedNode?.name === definition.name,
    onClick: (state) => selectNode(state, definition.name),
  })

  state.ctx.restore()
}
