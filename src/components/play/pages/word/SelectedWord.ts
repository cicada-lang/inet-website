import { WordDefinition } from '@cicada-lang/inet'
import { NetRendering } from '../../components/net/NetRendering'

export type SelectedWord = {
  name: string
  definition: WordDefinition
  netRendering: NetRendering
}
