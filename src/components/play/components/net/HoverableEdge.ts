import { HalfEdge } from '@cicada-lang/inet-js'

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
