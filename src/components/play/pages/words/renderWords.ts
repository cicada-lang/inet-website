import { State } from '../../State'
import { renderButtonBack } from '../../nav/renderButtonBack'
import { renderNavbar } from '../../nav/renderNavbar'
import { RenderOptions } from '../../route/Route'
import { renderSelectedWord } from './renderSelectedWord'
import { renderWordList } from './renderWordList'
import { selectFirstWord } from './selectFirstWord'

export function renderWords(state: State, options: RenderOptions): void {
  state.ctx.clearRect(0, 0, state.width, state.height)

  if (state.selectedWord === undefined) {
    selectFirstWord(state)
  }

  if (state.selectedWord) {
    renderSelectedWord(state, state.selectedWord)
  }

  if (!state.isHidingUI) {
    renderWordList(state)
    renderNavbar(state)
    if (state.history.length > 0) renderButtonBack(state)
  }
}
