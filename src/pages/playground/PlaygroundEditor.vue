<script setup lang="ts">
import { State } from "./State"

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    spellcheck="false"
    class="h-full w-full overflow-y-auto whitespace-pre p-3 font-mono text-sm md:text-base"
    v-model="state.text"
  ></textarea>
</template>
./State
