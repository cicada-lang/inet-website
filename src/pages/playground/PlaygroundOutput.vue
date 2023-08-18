<script setup lang="ts">
import { ref } from "vue"
import { State } from "./State"

defineProps<{
  state: State
}>()

const initial = ref()
const finial = ref()
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div v-if="state.errorMessage" class="h-full w-full overflow-y-auto">
      <div class="px-3 py-1 text-xl font-bold">Error</div>
      <pre class="px-3 py-2 text-base" v-html="state.errorMessage"></pre>
    </div>

    <div
      v-else
      class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto"
    >
      <div class="flex h-full flex-wrap overflow-x-auto overflow-y-auto">
        <div v-if="initial" class="px-2 py-2">
          <div class="max-w-max rounded px-2 py-1 font-cute text-base">
            initial
          </div>
          <div v-html="initial"></div>
        </div>
        <div v-if="finial" class="px-2 py-2">
          <div class="max-w-max rounded px-2 py-1 font-cute text-base">
            finial
          </div>
          <div v-html="finial"></div>
        </div>
      </div>
    </div>
  </div>
</template>
