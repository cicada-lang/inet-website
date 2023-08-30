import { Value, copyConnectedComponent, createNet } from '@cicada-lang/inet'
import { State } from '../../State'
import { createInitialNetLayout } from '../../net-layout/createInitialNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(state: State, value: Value): SelectedValue {
  const stackIndex = state.mod.env.stack.length - 1

  if (value['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, value.node)
    const layout = createInitialNetLayout(
      state,
      net,
      state.width / 4,
      state.height / 4,
      state.width / 2,
      state.height / 2,
    )

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValuePort',
      port: value,
      net,
      layout,
      evolvingStep: 0,
      stackIndex,
    }
  } else {
    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValueGeneric',
      value,
      stackIndex,
    }
  }
}
