<template>
  <div class="h-full">
    <textarea
      spellcheck="false"
      class="h-full w-full overflow-y-auto whitespace-pre px-3 py-3 font-mono text-base"
      v-model="state.text"
    ></textarea>
  </div>
</template>

<script setup>
import { PlaygroundState as State } from "./playground-state"

defineProps({
  state: State,
})
</script>
