import { formatWord } from '@cicada-lang/inet/lib/lang/word/formatWord'
import { State } from '../../State'
import themeFontMono from '../../theme/themeFontMono'
import { renderText } from '../../utils/renderText'

export function renderTypeDefinition(state: State): void {
  let typeDefinition = undefined

  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      if (name === state.currentRoute.properties?.name) {
        typeDefinition = definition
      }
    }
  }

  if (typeDefinition) {
    state.ctx.save()

    state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

    const x = state.width / 3
    const y = state.height / 2

    state.ctx.font = state.breakpoints.md
      ? themeFontMono('3xl')
      : themeFontMono('2xl')

    renderText(state, typeDefinition.name, x, y - 60, {
      lineHeight: 30,
    })

    state.ctx.font = state.breakpoints.md
      ? themeFontMono('2xl')
      : themeFontMono('xl')

    const inputText = typeDefinition.input.map(formatWord).join(' ')
    const outputText = typeDefinition.output.map(formatWord).join(' ')
    const text = [`input: ${inputText}`, `output: ${outputText}`].join('\n')
    renderText(state, text, x, y, {
      lineHeight: 30,
    })

    state.ctx.restore()
  }
}
