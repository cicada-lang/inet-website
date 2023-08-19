<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import PlaygroundToolbar from './PlaygroundToolbar.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full min-h-[20rem]">
    <PlaygroundToolbar
      class="border-b md:border-t-0 border-t dark:border-white border-black px-3 py-2"
      :state="state"
    />

    <div class="flex flex-col h-full w-full overflow-auto p-3">
      <div v-if="state.errorMessage" class="flex flex-col h-full w-full">
        <div
          class="pb-3 text-xl text-rose-500 dark:text-rose-400 font-bold"
        >
          <Lang>
            <template #zh> 错误 </template>
            <template #en> Error </template>
          </Lang>
        </div>
        <pre
          class="text-sm md:text-base text-base"
          v-html="state.errorMessage"
        ></pre>
      </div>

      <div v-if="state.output" class="flex h-full flex-col w-full">
        <div
          v-if="state.errorMessage"
          class="pb-3 pt-3 text-sky-500 dark:text-sky-400 text-xl font-bold"
        >
          <Lang>
            <template #zh> 输出 </template>
            <template #en> Output </template>
          </Lang>
        </div>
        <pre class="text-sm md:text-base">{{ state.output }}</pre>
      </div>
    </div>
  </div>
</template>
