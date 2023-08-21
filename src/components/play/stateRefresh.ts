import { copyConnectedComponent } from '@cicada-lang/inet/lib/lang/net/copyConnectedComponent'
import { createNet } from '@cicada-lang/inet/lib/lang/net/createNet'
import { State } from './State.ts'
import { createInitialNetLayout } from './createInitialNetLayout.ts'

export function stateRefresh(state: State): void {
  const currentValue = state.mod.env.stack[state.mod.env.stack.length - 1]

  if (currentValue === undefined) {
    return
  }

  if (currentValue['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, currentValue.node)
    const layout = createInitialNetLayout(state, net)

    state.current = {
      '@type': 'Current',
      '@kind': 'CurrentPort',
      port: currentValue,
      net,
      layout,
    }
  } else {
    state.current = {
      '@type': 'Current',
      '@kind': 'CurrentValue',
      value: currentValue,
    }
  }
}
