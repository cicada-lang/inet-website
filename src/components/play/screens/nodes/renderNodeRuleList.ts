import { NodeDefinition, findNodeRuleEntries } from '@cicada-lang/inet'
import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSans } from '../../theme/themeFontSans'

export function renderNodeRuleList(
  state: State,
  definition: NodeDefinition,
): void {
  const ruleEntries = findNodeRuleEntries(state.mod, {
    url: definition.mod.url,
    name: definition.name,
  })

  state.ctx.save()

  const height = 34

  state.ctx.font = state.breakpoints.md
    ? themeFontSans('lg')
    : themeFontSans('base')

  let i = 0
  for (const { name } of ruleEntries) {
    renderButton(state, name, 0, state.height - height - height * i, {
      name: `rules/${name}`,
      height,
      paddingX: 10,
      isActive: (state) => state.currentRoute.properties?.ruleName === name,
      activeUnderline: { offset: 8, width: 1.5 },
      handler: (state) => {
        state.currentRoute.properties = state.currentRoute.properties || {}
        state.currentRoute.properties.ruleName = name
      },
    })

    i++
  }

  state.ctx.restore()
}
