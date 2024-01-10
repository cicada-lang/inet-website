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
import { stateLoadReactive } from './stateLoadReactive'

defineProps<{
  encoded: String
}>()

const router = useRouter()
const route = useRoute()

const lang = useGlobalLang()

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await stateLoadReactive({
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
    class="h-screen-dynamic flex flex-col overflow-auto dark:bg-black dark:text-white"
  >
    <Head>
      <title v-if="lang.isZh()">演算场 | iNet</title>
      <title v-else>Playground | iNet</title>
    </Head>

    <PageHead class="border-b border-black px-3 py-2 dark:border-white" />

    <div v-if="state" class="flex h-full flex-col lg:flex-row lg:overflow-auto">
      <div class="flex h-full min-h-[26rem] flex-col lg:w-1/2 lg:overflow-auto">
        <PlaygroundToolbar :state />

        <PlaygroundEditor class="h-full resize-none lg:overflow-auto" :state />
      </div>

      <div
        class="flex h-full min-h-full flex-col border-black dark:border-white lg:w-1/2 lg:overflow-auto lg:border-l"
      >
        <PlaygroundTabs :state />

        <PlaygroundPlay v-if="state.kind === 'Play'" :state />

        <PlaygroundOutput
          v-if="state.output && state.kind === 'Output'"
          :state
          :output="state.output"
        />

        <PlaygroundError
          v-if="state.errorMessage && state.kind === 'Error'"
          :state
          :errorMessage="state.errorMessage"
        />
      </div>
    </div>
  </div>
</template>
