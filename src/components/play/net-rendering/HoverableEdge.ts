import { Port } from '@cicada-lang/inet'

export type HoverableEdge = {
  distance: number
  first: {
    port: Port
    position: [number, number]
  }
  second: {
    port: Port
    position: [number, number]
  }
}
