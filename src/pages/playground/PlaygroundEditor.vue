<template>
  <textarea
    spellcheck="false"
    cols="100"
    class="h-full w-full resize-none overflow-y-auto whitespace-pre p-3 font-mono text-sm md:resize-x md:text-base"
    v-model="state.text"
  ></textarea>
</template>

<script setup>
import { PlaygroundState as State } from "./playground-state"

defineProps({
  state: State,
})
</script>
