<template>
  <PageLayout>
    <div class="flex flex-col h-full">
      <PlaygroundHeader />
      <div class="flex h-full overflow-y-auto">
        <div class="w-7/12">
          <CodeEditor :state="state" />
        </div>
        <div v-if="state.error" class="w-6/12 border-l-2 border-rose-300">
          {{ state.error.message }}
        </div>
        <div v-else class="w-6/12 border-l-2 border-rose-300">
          <NetViewer :state="state" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { watch, reactive, ref } from "vue"
import { PlaygroundState as State } from "./playground-state"

import CodeEditor from "../../components/molecules/CodeEditor.vue"
import NetViewer from "../../components/molecules/NetViewer.vue"
import PageLayout from "../../components/layouts/page-layout/PageLayout.vue"
import PlaygroundHeader from "./PlaygroundHeader.vue"

const state = reactive(new State())

watch(
  () => state.text,
  async () => {
    await state.render()
  },
  { immediate: true }
)
</script>
