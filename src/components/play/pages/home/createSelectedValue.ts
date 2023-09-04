import { Value, copyConnectedComponent, createNet } from '@cicada-lang/inet'
import { State } from '../../State'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(state: State, value: Value): SelectedValue {
  if (value['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(state.mod.env.net, net, value.node)
    const layout = createRandomNetLayout(net, {
      x: state.width / 5,
      y: state.height / 5,
      width: (state.width * 3) / 5,
      height: (state.height * 3) / 5,
    })

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValuePort',
      port: value,
      netRendering: createNetRendering('home/selected-net', net, layout),
    }
  } else {
    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValueGeneric',
      value,
    }
  }
}
