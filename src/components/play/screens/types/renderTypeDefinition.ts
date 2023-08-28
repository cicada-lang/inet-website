import { TypeDefinition } from '@cicada-lang/inet/lib/lang/definition'
import { formatWord } from '@cicada-lang/inet/lib/lang/word/formatWord'
import { State } from '../../State'
import themeFontMono from '../../theme/themeFontMono'
import { renderText } from '../../utils/renderText'

export function renderTypeDefinition(
  state: State,
  definition: TypeDefinition,
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

  state.ctx.font = state.breakpoints.md
    ? themeFontMono('2xl')
    : themeFontMono('xl')

  const inputText = definition.input.map(formatWord).join(' ')
  const outputText = definition.output.map(formatWord).join(' ')
  const text = [`input: ${inputText}`, `output: ${outputText}`].join('\n')
  renderText(state, text, x, y, {
    lineHeight: 30,
  })

  state.ctx.restore()
}
