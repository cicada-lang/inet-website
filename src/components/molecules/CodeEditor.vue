<template>
  <div class="h-full">
    <textarea
      spellcheck="false"
      class="h-full w-full overflow-y-auto whitespace-pre px-3 py-2 font-mono text-base"
      v-model="state.text"
    ></textarea>
  </div>
</template>

<script setup>
import ty from "@xieyuheng/ty"
import { createProps } from "../../utilities/create-props"

defineProps(
  createProps({
    state: ty.object({
      text: ty.string(),
    }),
  })
)
</script>
