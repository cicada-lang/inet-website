import { copyConnectedComponent, createNet } from '@cicada-lang/inet'
import { State } from '../State'
import { createInitialNetLayout } from '../net-layout/createInitialNetLayout'
import { Selected } from './Selected'

export function createSelected(state: State): Selected | undefined {
  const selectedValue = state.mod.env.stack[state.mod.env.stack.length - 1]

  if (selectedValue === undefined) {
    return undefined
  }

  if (selectedValue['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, selectedValue.node)
    const layout = createInitialNetLayout(state, net)

    return {
      '@type': 'Selected',
      '@kind': 'SelectedPort',
      port: selectedValue,
      net,
      layout,
      evolvingStep: 0,
    }
  } else {
    return {
      '@type': 'Selected',
      '@kind': 'SelectedValue',
      value: selectedValue,
    }
  }
}
