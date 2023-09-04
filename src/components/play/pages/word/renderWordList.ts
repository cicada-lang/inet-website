import { State } from '../../State'
import { renderButton } from '../../components/button/renderButton'
import { themeFontSize } from '../../theme/themeFontSize'
import { themeSize } from '../../theme/themeSize'
import { renderWordListLabel } from './renderWordListLabel'
import { selectWord } from './selectWord'

export function renderWordList(state: State): void {
  renderWordListLabel(state)

  state.ctx.save()

  const height = themeSize(10)
  const marginT = height * 2

  state.ctx.font = state.breakpoints.lg
    ? `${themeFontSize('lg')} monospace`
    : `${themeFontSize('base')} monospace`

  let i = 0
  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'WordDefinition') {
      renderButton(state, {
        name: `words/${name}`,
        text: name,
        x: 0,
        y: marginT + height * i,
        height,
        isActive: (state) => state.wordState.selectedWord?.name === name,
        isDisabled: (state) => state.wordState.selectedWord?.name === name,
        handler: (state) => selectWord(state, name),
      })

      i++
    }
  }

  state.ctx.restore()
}
