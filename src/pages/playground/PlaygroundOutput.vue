<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
  output: string
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full overflow-auto p-3">
    <pre class="text-sm lg:text-base">{{ output }}</pre>
  </div>
</template>
