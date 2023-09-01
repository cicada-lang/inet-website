import { WordDefinition } from '@cicada-lang/inet'
import { NetRendering } from '../../net/NetRendering'

export type SelectedWord = {
  name: string
  definition: WordDefinition
  rendering: NetRendering
}
