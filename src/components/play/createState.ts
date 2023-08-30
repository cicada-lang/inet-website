import { Mod } from '@cicada-lang/inet'
import { useBreakpoints } from '../../reactives/useBreakpoints'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'
import { State } from './State'
import { createMouse } from './mouse/createMouse'
import { routes } from './pages/routes'

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

  const mouse = createMouse({ width, height })

  const breakpoints = useBreakpoints()

  return {
    container,
    canvas,
    devicePixelRatio: window.devicePixelRatio || 1,
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
  }
}
