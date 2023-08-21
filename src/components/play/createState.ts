import { Mod } from '@cicada-lang/inet'
import { copyConnectedComponent } from '@cicada-lang/inet/lib/lang/net/copyConnectedComponent'
import { createNet } from '@cicada-lang/inet/lib/lang/net/createNet'
import { State } from './State.ts'
import { createInitialNetLayout } from './createInitialNetLayout.ts'
import { createMouse } from './mouse/createMouse.ts'

export type StateOptions = {
  canvas: HTMLCanvasElement
  mod: Mod
}

export function createState(options: StateOptions): State {
  const { mod, canvas } = options

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const mouse = createMouse(canvas)

  const state: State = {
    canvas,
    ctx,
    mouse,
    mod,
  }

  const currentValue = mod.env.stack[mod.env.stack.length - 1]
  if (currentValue) {
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

  return state
}
