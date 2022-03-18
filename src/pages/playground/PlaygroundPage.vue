<template>
  <PlaygroundLayout>
    <div class="flex h-full">
      <div class="w-7/12">
        <CodeEditor :state="state" />
      </div>
      <div v-if="state.error" class="w-5/12 border-l-2 border-rose-300">
        {{ state.error.message }}
      </div>
      <div v-else class="w-5/12 border-l-2 border-rose-300">
        <NetViewer :state="state" />
      </div>
    </div>
  </PlaygroundLayout>
</template>

<script setup>
import { watch, reactive, ref } from "vue"
import { PlaygroundState as State } from "./playground-state"

import CodeEditor from "../../components/molecules/CodeEditor.vue"
import NetViewer from "../../components/molecules/NetViewer.vue"
import PlaygroundLayout from "./PlaygroundLayout.vue"

const state = reactive(new State())

watch(
  () => state.text,
  async () => {
    await state.render()
  },
  { immediate: true }
)
</script>
