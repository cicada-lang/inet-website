<script setup lang="ts">
import { Head } from '@vueuse/head'
import { Base64 } from 'js-base64'
import debounce from 'lodash/debounce'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageHead from '../../layouts/page-layout/PageHead.vue'
import PlaygroundEditor from './PlaygroundEditor.vue'
import PlaygroundError from './PlaygroundError.vue'
import PlaygroundOutput from './PlaygroundOutput.vue'
import PlaygroundPlay from './PlaygroundPlay.vue'
import PlaygroundTabs from './PlaygroundTabs.vue'
import PlaygroundToolbar from './PlaygroundToolbar.vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'

defineProps<{
  encoded: String
}>()

const router = useRouter()
const route = useRoute()

const lang = useGlobalLang()

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
    class="flex overflow-auto h-screen-dynamic flex-col dark:bg-black dark:text-white"
  >
    <Head>
      <title v-if="lang.isZh()">演算场 | iNet</title>
      <title v-else>Playground | iNet</title>
    </Head>

    <PageHead class="border-b border-black dark:border-white px-3 py-2" />

    <div v-if="state" class="flex flex-col h-full md:overflow-auto md:flex-row">
      <div class="flex min-h-[23rem] flex-col md:overflow-auto h-full md:w-1/2">
        <PlaygroundToolbar :state="state" />

        <PlaygroundEditor
          class="h-full md:overflow-auto resize-none"
          :state="state"
        />
      </div>

      <div
        class="md:border-l flex flex-col min-h-[23rem] md:overflow-auto h-full border-black dark:border-white md:w-1/2"
      >
        <PlaygroundTabs :state="state" />

        <PlaygroundPlay v-if="state.kind === 'Play'" :state="state" />

        <PlaygroundOutput
          v-if="state.output && state.kind === 'Output'"
          :state="state"
          :output="state.output"
        />

        <PlaygroundError
          v-if="state.errorMessage && state.kind === 'Error'"
          :state="state"
          :errorMessage="state.errorMessage"
        />
      </div>
    </div>
  </div>
</template>
