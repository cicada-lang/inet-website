import { Mod } from '@cicada-lang/inet'
import { useBreakpoints } from '../../reactives/useBreakpoints'
import { Theme } from '../../reactives/useGlobalTheme'
import { Button } from './button/Button'
import { Mouse } from './mouse/Mouse'
import { SelectedValue } from './selected-value/SelectedValue'

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

  // Frame rate control:
  lastTime: number
  clickCoollingTimer: number

  // Abstract devices:
  mouse: Mouse

  // Entity stores:
  buttons: Map<string, Button>

  // Interactions:
  selectedValue?: SelectedValue
  selectedStackIndex?: number
  selectedLocalName?: string
}
