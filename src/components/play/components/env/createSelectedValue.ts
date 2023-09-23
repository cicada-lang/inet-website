import {
  Value,
  copyConnectedComponent,
  createNet,
  findHalfEdgeEntryOrFail,
  findHalfEdgePortOrFail,
} from '@cicada-lang/inet-js'
import { EnvRendering } from '../../components/env/EnvRendering'
import { createNetRendering } from '../../components/net/createNetRendering'
import { createRandomNetLayout } from '../../components/net/createRandomNetLayout'
import { SelectedValue } from './SelectedValue'

export function createSelectedValue(
  rendering: EnvRendering,
  value: Value,
): SelectedValue {
  if (value['@kind'] === 'HalfEdge') {
    const net = createNet()
    const haflEdgeEntry = findHalfEdgeEntryOrFail(rendering.env.net, value)
    const otherPort = findHalfEdgePortOrFail(
      rendering.env.net,
      haflEdgeEntry.otherHalfEdge,
    )
    copyConnectedComponent(rendering.env.net, net, otherPort.node)

    const { x, y, width, height } = rendering
    const layout = createRandomNetLayout(net, {
      x: x + width / 5,
      y: y + height / 5,
      width: (width * 3) / 5,
      height: (height * 3) / 5,
    })

    return {
      '@type': 'SelectedValue',
      '@kind': 'SelectedValueHalfEdge',
      halfEdge: value,
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
