import { WordDefinition } from '@cicada-lang/inet-cute'
import { EnvRendering } from '../../components/env/EnvRendering'

export type SelectedWord = {
  name: string
  definition: WordDefinition
  envRendering: EnvRendering
}
