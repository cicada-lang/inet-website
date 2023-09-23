import { Mod } from '@cicada-lang/inet-js'
import { useBreakpoints } from '../../reactives/useBreakpoints'
import { Theme } from '../../reactives/useGlobalTheme'
import { Button } from './components/button/Button'
import { ClickableRect } from './components/clickable-rect/ClickableRect'
import { NetRendering } from './components/net/NetRendering'
import { Mouse } from './mouse/Mouse'
import { FunctionState } from './pages/function/FunctionState'
import { HomeState } from './pages/home/HomeState'
import { NodeState } from './pages/node/NodeState'
import { TypeState } from './pages/type/TypeState'
import { Route, RouteExp } from './route/Route'

export type State = {
  // Contexts:
  container: HTMLElement
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  mod: Mod
  width: number
  height: number
  theme: Theme
  breakpoints: ReturnType<typeof useBreakpoints>
  routes: Array<Route>
  currentRoute: RouteExp
  history: Array<RouteExp>

  // Frame rate control:
  lastTime: number
  clickCoollingTimer: number

  // Abstract devices:
  isHidingUI?: boolean
  mouse: Mouse

  // Components:
  buttons: Map<string, Button>
  clickableRects: Map<string, ClickableRect>
  netRenderings: Map<string, NetRendering>

  // Sub-states:
  homeState: HomeState
  typeState: TypeState
  nodeState: NodeState
  functionState: FunctionState
}
