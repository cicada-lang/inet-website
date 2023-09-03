import { State } from '../../State'
import { renderBackButton } from '../../components/navbar/renderBackButton'
import { renderNavbar } from '../../components/navbar/renderNavbar'
import { evolveNet } from '../../components/net/evolveNet'
import { RenderOptions } from '../../route/Route'
import { renderSelectedWord } from './renderSelectedWord'
import { renderWordList } from './renderWordList'
import { selectFirstWord } from './selectFirstWord'

export function renderWordPage(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.wordState.selectedWord === undefined) {
    selectFirstWord(state)
  }

  if (state.wordState.selectedWord) {
    renderSelectedWord(state, state.wordState.selectedWord)
    evolveNet(state, state.wordState.selectedWord.rendering)
  }

  if (!state.isHidingUI) {
    renderWordList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderBackButton(state)
  }
}
