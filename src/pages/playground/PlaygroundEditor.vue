<script setup lang="ts">
import { State } from "./State"

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    spellcheck="false"
    class="h-full w-full overflow-y-auto whitespace-pre p-3 font-code text-sm sm:text-base"
    v-model="state.text"
  ></textarea>
</template>
