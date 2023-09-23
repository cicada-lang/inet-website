import { Mod } from '@cicada-lang/inet-js'
import { useBreakpoints } from '../../reactives/useBreakpoints'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'
import { createMouse } from './mouse/createMouse'
import { createFunctionState } from './pages/function/createFunctionState'
import { createHomeState } from './pages/home/createHomeState'
import { createNodeState } from './pages/node/createNodeState'
import { routes } from './pages/routes'
import { createTypeState } from './pages/type/createTypeState'

export type StateOptions = {
  canvas: HTMLCanvasElement
  container: HTMLElement
  mod: Mod
}

export function createState(options: StateOptions): State {
  const { mod, canvas, container } = options

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const theme = useGlobalTheme()

  const width = container.offsetWidth
  const height = container.offsetHeight

  const mouse = createMouse()

  const breakpoints = useBreakpoints()

  return {
    container,
    canvas,
    ctx,
    theme,
    breakpoints,
    routes,
    currentRoute: { name: 'home' },
    history: [],
    width,
    height,
    lastTime: 0,
    clickCoollingTimer: 0,
    mouse,
    mod,
    buttons: new Map(),
    clickableRects: new Map(),
    netRenderings: new Map(),
    homeState: createHomeState({ env: mod.env, x: 0, y: 0, width, height }),
    typeState: createTypeState(),
    nodeState: createNodeState(),
    functionState: createFunctionState(),
  }
}
