<script setup lang="ts">
import { Base64 } from 'js-base64'
import debounce from 'lodash/debounce'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHead from '../../layouts/page-layout/PageHead.vue'
import PlaygroundEditor from './PlaygroundEditor.vue'
import PlaygroundOutput from './PlaygroundOutput.vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'

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

watch(route, () => {
  if (state.value) {
    state.value.text = Base64.decode(String(route.params.encoded))
  }
})

watch(
  () => state.value?.text,
  debounce(async (value) => {
    if (state.value) {
      router.replace({
        path: `/playground/${Base64.encodeURI(value)}`,
      })
    }
  }, 300),
)
</script>

<template>
  <div class="flex h-screen-dynamic flex-col dark:bg-stone-800 dark:text-white">
    <div class="flex h-full overflow-auto flex-col">
      <PageHead class="border-b border-black dark:border-white px-3 py-2" />

      <div
        v-if="state"
        class="flex h-full flex-col sm:overflow-y-auto sm:flex-row"
      >
        <PlaygroundEditor
          class="sm:w-1/2 sm:resize-x"
          style="min-height: 30rem"
          :state="state"
        />

        <PlaygroundOutput
          class="sm:border-l border-black dark:border-white sm:w-1/2"
          :state="state"
        />
      </div>
    </div>
  </div>
</template>
