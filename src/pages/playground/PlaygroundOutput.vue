<script setup lang="ts">
import PlaygroundToolbar from "./PlaygroundToolbar.vue"
import { State } from "./State"

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full overflow-y-auto min-h-[20rem]">
    <PlaygroundToolbar
      class="border-b sm:border-t-0 border-t border-black px-3 py-2"
      :state="state"
    />

    <div v-if="state.errorMessage" class="flex flex-col h-full w-full">
      <div class="px-3 py-1 text-xl text-rose-500 font-bold">Error</div>
      <pre class="px-3 py-2 text-base" v-html="state.errorMessage"></pre>
    </div>

    <div v-if="state.output" class="flex h-full flex-col w-full">
      <div
        v-if="state.errorMessage"
        class="px-3 py-1 text-sky-500 text-xl font-bold"
      >
        Output
      </div>
      <pre class="px-3 py-2">{{ state.output }}</pre>
    </div>
  </div>
</template>
