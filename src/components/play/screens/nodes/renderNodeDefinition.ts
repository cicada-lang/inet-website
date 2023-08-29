import { NodeDefinition } from '@cicada-lang/inet'
import { State } from '../../State'
import themeFontMono from '../../theme/themeFontMono'
import { renderText } from '../../utils/renderText'
import { renderNodeRuleList } from './renderNodeRuleList'

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

  renderNodeRuleList(state, definition)

  state.ctx.restore()
}
