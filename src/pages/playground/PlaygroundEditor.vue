<script setup lang="ts">
import { watchPostEffect } from 'vue'
import { State } from './State'

const props = defineProps<{
  state: State
}>()

async function tabHandler(evt: KeyboardEvent) {
  const target = evt.target as HTMLTextAreaElement
  const { selectionStart, selectionEnd } = target
  props.state.text =
    props.state.text.slice(0, selectionStart) +
    '\t' +
    props.state.text.slice(selectionEnd)

  // restore cursor position
  watchPostEffect(() => {
    target.selectionStart = selectionStart + 1
    target.selectionEnd = selectionStart + 1
  })
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="tabHandler"
    spellcheck="false"
    class="w-full overflow-y-auto whitespace-pre bg-white p-3 font-code text-base dark:bg-black lg:text-lg"
    v-model="state.text"
  ></textarea>
</template>
