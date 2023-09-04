import { NodeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { selectNode } from './selectNode'

export function renderNodeListEntry(
  state: State,
  i: number,
  name: string,
  definition: NodeDefinition,
  options: {
    height: number
    marginT: number
  },
): void {
  const { height, marginT } = options

  state.ctx.save()

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  renderButton(state, {
    name: `nodes/${name}`,
    text: name,
    x: 0,
    y: marginT + height * i,
    height,
    isActive: (state) => state.nodeState.selectedNode?.name === name,
    isDisabled: (state) => state.nodeState.selectedNode?.name === name,
    handler: (state) => selectNode(state, name),
  })

  state.ctx.restore()
}
