import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderWordsLabel } from './renderWordsLabel'
import { selectWord } from './selectWord'

export function renderWordList(state: State): void {
  renderWordsLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      renderButton(state, name, 0, marginT + height * i, {
        name: `words/${name}`,
        height,
        isActive: (state) => state.selectedWord?.name === name,
        isDisabled: (state) => state.selectedWord?.name === name,
        handler: (state) => selectWord(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
