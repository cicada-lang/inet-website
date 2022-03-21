<template>
  <PageLayout>
    <div class="flex h-full flex-col">
      <PlaygroundHeader :state="state" />
      <div class="flex h-full flex-col overflow-y-auto md:flex-row">
        <PlaygroundEditor
          class="shrink grow md:w-1/2 md:resize-x"
          style="min-height: 30rem"
          :state="state"
        />
        <PlaygroundOutput
          class="shrink grow border-l border-theme-300 md:w-1/2"
          :state="state"
        />
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { watch, reactive, onMounted, onErrorCaptured } from "vue"
import { useRouter, useRoute } from "vue-router"
import { PlaygroundState as State } from "./playground-state"
import debounce from "lodash/debounce"
import { Base64 } from "js-base64"

import PageLayout from "../../components/layouts/page-layout/PageLayout.vue"
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundOutput from "./PlaygroundOutput.vue"
import PlaygroundEditor from "./PlaygroundEditor.vue"

const router = useRouter()
const route = useRoute()

const props = defineProps({
  encoded: String,
})

const state = reactive(new State())

onErrorCaptured((error, component, info) => {
  state.catchError(error)
  return false
})

watch(
  route,
  () => {
    state.text = Base64.decode(route.params.encoded)
  },
  { immediate: true }
)

watch(
  () => state.text,
  debounce(() => {
    state.refresh()
    router.replace({
      path: `/playground/${Base64.encodeURI(state.text)}`,
    })
  }, 300),
  { immediate: true }
)
</script>
