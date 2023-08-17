<script setup lang="ts">
import { Base64 } from "js-base64"
import debounce from "lodash/debounce"
import { reactive, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import PlaygroundEditor from "./PlaygroundEditor.vue"
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundOutput from "./PlaygroundOutput.vue"
import { State } from "./State"

const router = useRouter()
const route = useRoute()

defineProps<{
  encoded: String
}>()

const state = reactive(new State())

watch(
  route,
  () => {
    state.text = Base64.decode(String(route.params.encoded))
  },
  { immediate: true },
)

watch(
  () => state.text,
  debounce(() => {
    // state.refresh()
    router.replace({
      path: `/playground/${Base64.encodeURI(state.text)}`,
    })
  }, 300),
  { immediate: true },
)
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex h-full overflow-auto flex-col">
      <PlaygroundHeader :state="state" />
      <div class="flex h-full flex-col overflow-y-auto md:flex-row">
        <PlaygroundEditor
          class="shrink grow md:w-1/2 md:resize-x"
          style="min-height: 30rem"
          :state="state"
        />
        <PlaygroundOutput
          class="shrink grow border-l border-black md:w-1/2"
          :state="state"
        />
      </div>
    </div>
  </div>
</template>
