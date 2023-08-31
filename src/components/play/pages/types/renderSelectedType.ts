import { formatWord } from '@cicada-lang/inet'
import { State } from '../../State'
import { themeFontSize } from '../../theme/themeFontSize'
import { renderText } from '../../utils/renderText'
import { SelectedType } from './SelectedType'

export function renderSelectedType(
  state: State,
  selectedType: SelectedType,
): void {
  state.ctx.save()

  state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'

  const x = state.width / 3
  const y = state.height / 2

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('3xl')} monospace`
    : `${themeFontSize('2xl')} monospace`

  renderText(state, selectedType.definition.name, x, y - 60, {
    lineHeight: 30,
  })

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('2xl')} monospace`
    : `${themeFontSize('xl')} monospace`

  const inputText = selectedType.definition.input.map(formatWord).join(' ')
  const outputText = selectedType.definition.output.map(formatWord).join(' ')
  const text = [`input: ${inputText}`, `output: ${outputText}`].join('\n')
  renderText(state, text, x, y, {
    lineHeight: 30,
  })

  state.ctx.restore()
}
