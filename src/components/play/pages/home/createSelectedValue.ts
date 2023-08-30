import { Value, copyConnectedComponent, createNet } from '@cicada-lang/inet'
import { State } from '../../State'
import { createRandomNetLayout } from '../../net-layout/createRandomNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(state: State, value: Value): SelectedValue {
  const stackIndex = state.mod.env.stack.length - 1

  if (value['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, value.node)
    const layout = createRandomNetLayout(
      net,
      state.width / 4,
      state.height / 4,
      state.width / 2,
      state.height / 2,
    )

    const netRendering = { net, layout, step: 0 }

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValuePort',
      port: value,
      netRendering,
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
