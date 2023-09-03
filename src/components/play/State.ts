import { Mod } from '@cicada-lang/inet'
import { useBreakpoints } from '../../reactives/useBreakpoints'
import { Theme } from '../../reactives/useGlobalTheme'
import { Button } from './components/button/Button'
import { ClickableRect } from './components/rect/ClickableRect'
import { Mouse } from './mouse/Mouse'
import { SelectedValue } from './pages/home/SelectedValue'
import { SelectedNode } from './pages/nodes/SelectedNode'
import { SelectedType } from './pages/types/SelectedType'
import { SelectedWord } from './pages/words/SelectedWord'
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

  // Sub-states:
  selectedValue?: SelectedValue
  homeStackScrollCursor?: number
  selectedType?: SelectedType
  selectedNode?: SelectedNode
  selectedWord?: SelectedWord
}
