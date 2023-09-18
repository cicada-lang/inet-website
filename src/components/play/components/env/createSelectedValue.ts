import {
  Value,
  copyConnectedComponent,
  createNet,
} from '@cicada-lang/inet-cute'
import { EnvRendering } from '../../components/env/EnvRendering'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(
  rendering: EnvRendering,
  value: Value,
): SelectedValue {
  if (value['@kind'] === 'Port') {
    const net = createNet()
    copyConnectedComponent(rendering.env.net, net, value.node)

    const { x, y, width, height } = rendering
    const layout = createRandomNetLayout(net, {
      x: x + width / 5,
      y: y + height / 5,
      width: (width * 3) / 5,
      height: (height * 3) / 5,
    })

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValuePort',
      port: value,
      netRendering: createNetRendering(
        `${rendering.name}/selected-net`,
        net,
        layout,
      ),
    }
  } else {
    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValueGeneric',
      value,
    }
  }
}
