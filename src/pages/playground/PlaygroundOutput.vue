<template>
  <div class="h-full w-full overflow-y-auto">
    <div v-if="state.error" class="h-full w-full overflow-y-auto">
      <div class="bg-rose-400 px-3 py-1 text-xl font-bold text-white">
        {{ state.error.kind }}
      </div>
      <pre class="px-3 py-2 text-base" v-html="state.error.message"></pre>
    </div>

    <div
      v-else
      class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto"
    >
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

      <div class="flex h-full flex-wrap overflow-x-auto overflow-y-auto">
        <div v-if="initial" class="px-2 py-2">
          <div
            class="max-w-max rounded bg-rose-100 px-2 py-1 font-cute text-base text-rose-900"
          >
            initial
          </div>
          <div v-html="initial"></div>
        </div>
        <div v-if="finial" class="px-2 py-2">
          <div
            class="max-w-max rounded bg-rose-100 px-2 py-1 font-cute text-base text-rose-900"
          >
            finial
          </div>
          <div v-html="finial"></div>
        </div>
      </div>
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
const finial = ref()

watch(
  () => props.state.mod,
  () => render(),
  { immediate: true }
)

watch(
  () => props.state.name,
  () => render(),
  { immediate: true }
)

async function render() {
  initial.value = ""
  finial.value = ""

  if (props.state.name) {
    const net = props.state.mod.buildNet(props.state.name)
    initial.value = await renderer.render(net)
    net.run()
    finial.value = await renderer.render(net)
  }
}
</script>
