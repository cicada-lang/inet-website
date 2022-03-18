<template>
  <div class="h-full w-full overflow-y-auto px-3 py-2">
    <div v-if="state.error" class="h-full w-full overflow-y-auto">
      <div class="pb-2 text-xl font-bold">{{ state.error.kind }}</div>
      <pre class="text-base" v-html="state.error.message"></pre>
    </div>

    <div v-else-if="state.net">
      <div class="text-bold">{{ state.name }}</div>
      <div v-if="initial" v-html="initial"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { NetRenderer } from "@cicada-lang/inet/lib/renderers/net-renderer"

import { PlaygroundState as State } from "./playground-state"

const renderer = new NetRenderer()

const props = defineProps({
  state: State,
})

const initial = ref()

watch(
  () => props.state.net,
  async () => {
    if (props.state.net) {
      initial.value = await renderer.render(props.state.net)
    }
  }
)
</script>
