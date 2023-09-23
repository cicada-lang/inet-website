import { SelectedFunction } from './SelectedFunction'

export type FunctionState = {
  selectedFunction?: SelectedFunction
  functionsInViewLength: number
  functionsScrollCursor?: number
}
