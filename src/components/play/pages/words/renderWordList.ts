import { State } from '../../State'
import { renderButton } from '../../button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderLabelWords } from './renderLabelWords'
import { selectWord } from './selectWord'

export function renderWordList(state: State): void {
  renderLabelWords(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2 + themeSize(4)

  state.ctx.font = state.breakpoints.md
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `words/${name}`,
        height,
        paddingX: themeSize(3),
        isActive: (state) => state.selectedWord?.name === name,
        isDisabled: (state) => state.selectedWord?.name === name,
        handler: (state) => selectWord(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
