import { NodeDefinition } from '@cicada-lang/inet-js'
import { State } from '../../State'
import { renderScrollbar } from '../../components/scrollbar/renderScrollbar'
import { themeSize } from '../../theme/themeSize'
import { renderNodeListEntry } from './renderNodeListEntry'
import { renderNodeListLabel } from './renderNodeListLabel'

export function renderNodeList(state: State): void {
  renderNodeListLabel(state)

  const inViewLength = state.nodeState.nodesInViewLength
  const height = themeSize(10)
  const marginT = height * 2

  const definitions = Array.from(state.mod.definitions.values()).filter(
    (definition): definition is NodeDefinition =>
      definition['@kind'] === 'NodeDefinition',
  )

  if (definitions.length > inViewLength) {
    const marginL = themeSize(10)
    const length = definitions.length
    const cursor = state.nodeState.nodesScrollCursor || 0

    renderScrollbar(state, {
      name: 'nodes-scrollbar',
      x: 0,
      y: marginT,
      width: marginL,
      height: height * inViewLength,
      length,
      inViewLength,
      cursor,
      onScroll: (cursor) => {
        state.nodeState.nodesScrollCursor = cursor
      },
    })

    for (const [i, definition] of definitions
      .slice(cursor, cursor + inViewLength)
      .entries()) {
      renderNodeListEntry(state, i, definition, {
        height,
        marginT,
        marginL,
      })
    }
  } else {
    for (const [i, definition] of definitions.entries()) {
      renderNodeListEntry(state, i, definition, {
        height,
        marginT,
        marginL: 0,
      })
    }
  }
}
