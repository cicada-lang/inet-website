<template>
  <PageLayout>
    <div class="flex h-full flex-col">
      <PlaygroundHeader />
      <div class="flex h-full overflow-y-auto">
        <div class="w-7/12">
          <CodeEditor :state="state" />
        </div>
        <div class="w-6/12 border-l-2 border-rose-300">
          <div class="flex space-x-2">
            <button
              v-for="name in state.names"
              :key="name"
              @click="state.render(state.load(), name)"
            >
              {{ name }}
            </button>
          </div>
          <PlaygroundOutput :state="state" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { watch, reactive, ref } from "vue"
import { PlaygroundState as State } from "./playground-state"
import debounce from "lodash/debounce"

import CodeEditor from "../../components/molecules/CodeEditor.vue"
import PageLayout from "../../components/layouts/page-layout/PageLayout.vue"
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundOutput from "./PlaygroundOutput.vue"

const state = reactive(new State())

watch(
  () => state.text,
  debounce(async () => {
    await state.render(state.load(), "two")
  }, 300),
  { immediate: true }
)
</script>
