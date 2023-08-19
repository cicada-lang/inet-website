<script setup lang="ts">
import { Base64 } from 'js-base64'
import debounce from 'lodash/debounce'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHead from '../../layouts/page-layout/PageHead.vue'
import PlaygroundEditor from './PlaygroundEditor.vue'
import PlaygroundNavbar from './PlaygroundNavbar.vue'
import PlaygroundOutput from './PlaygroundOutput.vue'
import PlaygroundPlay from './PlaygroundPlay.vue'
import PlaygroundToolbar from './PlaygroundToolbar.vue'
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
  <div
    class="flex overflow-auto h-screen-dynamic flex-col dark:bg-stone-800 dark:text-white"
  >
    <PageHead class="border-b border-black dark:border-white px-3 py-2" />

    <div
      v-if="state"
      class="flex flex-col md:h-full md:overflow-auto md:flex-row"
    >
      <PlaygroundEditor
        class="md:w-1/2 h-full md:resize-x"
        style="min-height: 30rem"
        :state="state"
      />

      <div
        class="md:border-l flex flex-col overflow-auto h-full border-black min-h-max dark:border-white md:w-1/2"
      >
        <div
          class="border-b flex justify-between sm:border-t-0 border-t dark:border-white border-black px-3 py-2"
        >
          <PlaygroundToolbar :state="state" />
          <PlaygroundNavbar :state="state" />
        </div>

        <PlaygroundOutput v-if="state.kind === 'Output'" :state="state" />
        <PlaygroundPlay v-if="state.kind === 'Play'" :state="state" />
      </div>
    </div>
  </div>
</template>
