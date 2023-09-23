import { HalfEdge } from '@cicada-lang/inet-js/lib/lang/half-edge'

export type HoverableEdge = {
  id: string
  distance: number
  first: {
    halfEdge: HalfEdge
    position: [number, number]
  }
  second: {
    halfEdge: HalfEdge
    position: [number, number]
  }
}
