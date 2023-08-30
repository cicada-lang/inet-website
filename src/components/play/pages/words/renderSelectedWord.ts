import { State } from '../../State'
import { renderNet } from '../../net/renderNet'
import { SelectedWord } from './SelectedWord'

export function renderSelectedWord(
  state: State,
  selectedWord: SelectedWord,
): void {
  state.ctx.save()

  renderNet(state, selectedWord.rendering)

  state.ctx.restore()
}
