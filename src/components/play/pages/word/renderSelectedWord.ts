import { State } from '../../State'
import { renderNet } from '../../components/net/renderNet'
import { SelectedWord } from './SelectedWord'

export function renderSelectedWord(
  state: State,
  selectedWord: SelectedWord,
): void {
  state.ctx.save()

  renderNet(state, selectedWord.netRendering)

  state.ctx.restore()
}
