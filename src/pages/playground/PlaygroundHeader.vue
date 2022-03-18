<template>
  <div
    class="flex items-center justify-between border-b border-rose-300 bg-rose-200 px-3 py-2"
  >
    <router-link
      to="/playground"
      class="font-cute text-xl font-semibold text-rose-900"
    >
      Playground
    </router-link>
    <PlaygroundToolbar :state="state" />
  </div>
</template>

<script setup>
import { PlaygroundState as State } from "./playground-state"

import PlaygroundToolbar from "./PlaygroundToolbar.vue"

const props = defineProps({
  state: State,
})
</script>
