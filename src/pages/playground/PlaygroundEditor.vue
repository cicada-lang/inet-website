<template>
  <div class="h-full">
    <textarea
      spellcheck="false"
      class="h-full w-full overflow-y-auto whitespace-pre p-3 font-mono text-sm md:text-base"
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
