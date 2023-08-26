import { formatWord } from '@cicada-lang/inet/lib/lang/word/formatWord'
import { State } from '../../State'

export function renderTypeDefinition(state: State): void {
  let typeDefinition = undefined
  ;(window as any).d = state.mod.definitions
  ;(window as any).name = state.currentRoute.properties?.name

  for (const [name, definition] of state.mod.definitions) {
    if (definition['@kind'] === 'TypeDefinition') {
      if (name === state.currentRoute.properties?.name) {
        typeDefinition = definition
      }
    }
  }

  if (typeDefinition) {
    state.ctx.save()

    state.ctx.fillStyle = state.theme.name === 'dark' ? 'white' : 'black'
    state.ctx.font = state.breakpoints.md ? '30px monospace' : '38px monospace'

    
    const outputText = typeDefinition.output.map(formatWord).join(' ')
    const outputTextMetrics = state.ctx.measureText(outputText)
    const x = state.width / 2 - 100
    const y = state.height / 2
    state.ctx.fillText(outputText, x, y)

    state.ctx.restore()
  }
}
