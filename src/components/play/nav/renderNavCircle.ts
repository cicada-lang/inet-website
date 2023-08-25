import { State } from '../State'
import { renderButtonBack } from './renderButtonBack'
import { renderButtonNodes } from './renderButtonNodes'
import { renderButtonTypes } from './renderButtonTypes'
import { renderButtonWords } from './renderButtonWords'

export function renderNavCircle(state: State): void {
  if (state.historyPaths.length > 0) {
    renderButtonBack(state)
  }

  state.ctx.save()

  const paddingT = 5
  const paddingR = 10
  state.ctx.translate(-paddingR, paddingT)

  renderButtonTypes(state)
  renderButtonNodes(state)
  renderButtonWords(state)

  state.ctx.restore()
}
