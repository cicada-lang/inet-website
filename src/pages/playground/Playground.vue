<script setup lang="ts">
import { Base64 } from "js-base64"
import debounce from "lodash/debounce"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import PlaygroundEditor from "./PlaygroundEditor.vue"
import PlaygroundHead from "./PlaygroundHead.vue"
import PlaygroundOutput from "./PlaygroundOutput.vue"
import { State } from "./State"
import { loadStateReactive } from "./loadStateReactive"
import { stateReload } from "./stateReload"

const router = useRouter()
const route = useRoute()

defineProps<{
  encoded: String
}>()

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await loadStateReactive({
    text: Base64.decode(String(route.params.encoded)),
  })
})

watch(
  route,
  () => {
    if (state.value) {
      state.value.text = Base64.decode(String(route.params.encoded))
    }
  },

)

watch(
  () => state.value?.text,
  debounce(async () => {
    if (state.value) {
      await stateReload(state.value)
      router.replace({
        path: `/playground/${Base64.encodeURI(state.value.text)}`,
      })
    }
  }, 300),
)
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex h-full overflow-auto flex-col">
      <PlaygroundHead v-if="state" :state="state" />

      <div class="flex h-full flex-col overflow-y-auto md:flex-row">
        <PlaygroundEditor
          v-if="state"
          class="shrink grow md:w-1/2 md:resize-x"
          style="min-height: 30rem"
          :state="state"
        />

        <PlaygroundOutput
          v-if="state"
          class="shrink grow border-l border-black md:w-1/2"
          :state="state"
        />
      </div>
    </div>
  </div>
</template>
