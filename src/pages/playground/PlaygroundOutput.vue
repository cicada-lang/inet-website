<template>
  <div class="h-full w-full overflow-y-auto">
    <div v-if="state.error" class="h-full w-full overflow-y-auto px-3 py-2">
      <div class="pb-2 text-xl font-bold">{{ state.error.kind }}</div>
      <pre class="text-base" v-html="state.error.message"></pre>
    </div>

    <div v-else>
      <div class="flex">
        <button
          class="w-full p-1 font-cute text-base text-rose-900"
          :class="name === state.name ? 'bg-rose-100' : 'bg-rose-200'"
          v-for="name in state.names"
          :key="name"
          @click="state.name = name"
        >
          {{ name }}
        </button>
      </div>

      <div v-if="initial" class="px-3 py-2" v-html="initial"></div>
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
  () => props.state.name,
  async () => {
    if (props.state.name) {
      const net = props.state.mod.buildNet(props.state.name)
      initial.value = await renderer.render(net)
    }
  },
  { immediate: true }
)
</script>
