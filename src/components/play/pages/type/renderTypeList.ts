import { TypeDefinition } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderTypeListEntry } from './renderTypeListEntry'
import { renderTypeListLabel } from './renderTypeListLabel'

export function renderTypeList(state: State): void {
  renderTypeListLabel(state)

  const inViewLength = state.typeState.typesInViewLength
  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is TypeDefinition =>
      definition['@kind'] === 'TypeDefinition',
  )

  if (definitions.length > inViewLength) {
    const marginL = themeSize(10)
    const length = definitions.length
    const cursor = state.typeState.typesScrollCursor || 0

    renderScrollbar(state, {
      name: 'types-scrollbar',
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.typeState.typesScrollCursor = cursor
      },
    })

    for (const [i, definition] of definitions
      .slice(cursor, cursor + inViewLength)
      .entries()) {
      renderTypeListEntry(state, i, definition, { height, marginT, marginL })
    }
  } else {
    for (const [i, definition] of definitions.entries()) {
      renderTypeListEntry(state, i, definition, { height, marginT, marginL: 0 })
    }
  }
}
