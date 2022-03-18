<template>
  <div class="h-full w-full overflow-y-auto px-3 py-2">
    <div v-if="state.error" class="h-full w-full overflow-y-auto">
      <div class="font-bold text-xl pb-2">{{ state.error.kind }}</div>
      <pre class="text-base" v-html="state.error.message"></pre>
    </div>

    <div v-else>
      <div v-for="(svg, name) in state.nets" :key="name">
        <div class="text-bold">{{ name }}</div>
        <div v-html="svg"></div>
      </div>
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
      error: ty.optional(
        ty.object({
          kind: ty.string(),
          message: ty.string(),
        })
      ),
    }),
  })
)
</script>
