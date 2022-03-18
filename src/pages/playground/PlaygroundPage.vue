<template>
  <PageLayout>
    <div class="flex h-full flex-col">
      <PlaygroundHeader />
      <div class="flex h-full overflow-y-auto">
        <div class="w-7/12">
          <PlaygroundEditor :state="state" />
        </div>
        <div class="w-6/12 border-l-2 border-rose-300">
          <PlaygroundOutput :state="state" />
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { watch, reactive, onMounted, onErrorCaptured } from "vue"
import { useRouter } from "vue-router"
import { PlaygroundState as State } from "./playground-state"
import debounce from "lodash/debounce"
import { Base64 } from "js-base64"

import PageLayout from "../../components/layouts/page-layout/PageLayout.vue"
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundOutput from "./PlaygroundOutput.vue"
import PlaygroundEditor from "./PlaygroundEditor.vue"

const router = useRouter()

const props = defineProps({
  encoded: String,
})

const state = reactive(new State())

onErrorCaptured((error, component, info) => {
  state.catchError(error)
  return false
})

onMounted(() => {
  if (props.encoded) {
    state.text = Base64.decode(props.encoded)
  }
})

watch(
  () => state.text,
  debounce(async () => {
    await state.refresh()
    router.replace({
      path: `/playground/${Base64.encodeURI(state.text)}`,
    })
  }, 300),
  { immediate: true }
)
</script>
