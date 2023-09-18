import { Port } from '@cicada-lang/inet-cute'

export type HoverableEdge = {
  id: string
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
