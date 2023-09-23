import { SelectedFunction } from './SelectedFunction'

export type FunctionState = {
  selectedWord?: SelectedFunction
  wordsInViewLength: number
  wordsScrollCursor?: number
}
