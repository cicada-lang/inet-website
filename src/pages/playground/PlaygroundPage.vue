<template>
  <PlaygroundLayout>
    <div class="flex h-full">
      <div class="w-7/12">
        <CodeEditor :text="text" />
      </div>
      <div class="w-5/12 border-l-2 border-rose-300">
        <NetViewer />
      </div>
    </div>
  </PlaygroundLayout>
</template>

<script setup>
import CodeEditor from "../../components/molecules/CodeEditor.vue"
import NetViewer from "../../components/molecules/NetViewer.vue"
import PlaygroundLayout from "./PlaygroundLayout.vue"

const props = defineProps({
  text: String,
})
</script>
