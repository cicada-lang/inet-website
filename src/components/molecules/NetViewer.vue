<template>
  <div class="h-full w-full overflow-y-auto px-3 py-2">
    <div v-for="(svg, key) in state.nets" :key="key">
      <div v-html="svg"></div>
    </div>
  </div>
</template>

<script setup>
import ty from "@xieyuheng/ty"
import { createProps } from "../../utilities/create-props"

defineProps(
  createProps({
    state: ty.object({
      nets: ty.dict(ty.string()),
    }),
  })
)
</script>
