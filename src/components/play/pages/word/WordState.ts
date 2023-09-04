import { SelectedWord } from './SelectedWord'

export type WordState = {
  selectedWord?: SelectedWord
  wordsInViewLength: number
  wordsScrollCursor?: number
}
