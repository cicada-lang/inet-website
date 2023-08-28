import { NodeDefinition } from '@cicada-lang/inet/lib/lang/definition'
import { State } from '../../State'
import themeFontMono from '../../theme/themeFontMono'
import { renderText } from '../../utils/renderText'

export function renderNodeDefinition(
  state: State,
  definition: NodeDefinition,
): void {
  state.ctx.save()

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const x = state.width / 3
  const y = state.height / 2

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('3xl')
    : themeFontMono('2xl')

  renderText(state, definition.name, x, y - 60, {
    lineHeight: 30,
  })

  state.ctx.restore()
}
