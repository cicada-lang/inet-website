<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    spellcheck="false"
    class="w-full overflow-y-auto whitespace-pre bg-white p-3 font-code text-base dark:bg-black lg:text-lg"
    v-model="state.text"
  ></textarea>
</template>
