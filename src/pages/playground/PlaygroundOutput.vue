<script setup lang="ts">
import PlaygroundToolbar from './PlaygroundToolbar.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full min-h-[20rem]">
    <PlaygroundToolbar
      class="border-b sm:border-t-0 border-t dark:border-white border-black px-3 py-2"
      :state="state"
    />

    <div class="flex flex-col h-full w-full overflow-auto">
      <div v-if="state.errorMessage" class="flex flex-col h-full w-full">
        <div
          class="px-3 py-1 text-xl text-rose-500 dark:text-rose-400 font-bold"
        >
          Error
        </div>
        <pre
          class="px-3 py-2 text-sm sm:text-base text-base"
          v-html="state.errorMessage"
        ></pre>
      </div>

      <div v-if="state.output" class="flex h-full flex-col w-full">
        <div
          v-if="state.errorMessage"
          class="px-3 py-1 text-sky-500 dark:text-sky-400 text-xl font-bold"
        >
          Output
        </div>
        <pre class="px-3 py-2 text-sm sm:text-base">{{ state.output }}</pre>
      </div>
    </div>
  </div>
</template>
