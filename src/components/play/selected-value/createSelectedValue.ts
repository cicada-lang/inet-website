import { copyConnectedComponent, createNet } from '@cicada-lang/inet'
import { State } from '../State'
import { createInitialNetLayout } from '../net-layout/createInitialNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(state: State): SelectedValue | undefined {
  const selectedValueValue = state.mod.env.stack[state.mod.env.stack.length - 1]

  if (selectedValueValue === undefined) {
    return undefined
  }

  if (selectedValueValue['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, selectedValueValue.node)
    const layout = createInitialNetLayout(state, net)

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValuePort',
      port: selectedValueValue,
      net,
      layout,
      evolvingStep: 0,
    }
  } else {
    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValueGeneric',
      value: selectedValueValue,
    }
  }
}
