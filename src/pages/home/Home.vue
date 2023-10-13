bui
<script setup lang="ts">
import { Base64 } from 'js-base64'
import { onMounted, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Play from '../../components/play/Play.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeFoot from './HomeFoot.vue'
import { State } from './State'
import { code, codeFragment } from './example'
import { sections } from './sections'
import { stateLoad } from './stateLoad'

const state = ref<State | undefined>(undefined)

const lang = useGlobalLang()

onMounted(async () => {
  state.value = await stateLoad({
    text: code,
  })
})
</script>

<template>
  <PageLayout>
    <div class="flex flex-col">
      <div class="flex w-full flex-col self-center px-3 py-32 lg:max-w-[64rem]">
        <div class="text-blance text-7xl font-bold">iNet</div>
        <div class="text-blance pt-2 text-4xl">
          <Lang>
            <template #zh> 用可反应的网编程。 </template>
            <template #en> Programming with interaction nets. </template>
          </Lang>

          <div class="flex pt-5">
            <a
              class="text-2xl underline decoration-2 underline-offset-4"
              target="_blank"
              :href="
                lang.isZh()
                  ? 'https://readonly.link/articles/https://code-of-inet-js.fidb.app/docs/articles/反应网编程.md'
                  : 'https://readonly.link/articles/https://code-of-inet-js.fidb.app/docs/articles/programming-with-interaction-nets.md'
              "
            >
              <Lang>
                <template #zh> 阅读文档 </template>
                <template #en> Get Started </template>
              </Lang>
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex w-full flex-col self-center px-3 lg:max-w-[64rem] lg:flex-row"
      >
        <div class="lg:w-1/3 lg:pr-3">
          <div class="border-2 border-black dark:border-white">
            <pre
              class="whitespace-pre p-4 font-code text-base lg:p-6 lg:text-lg"
              >{{ codeFragment }}</pre
            >
          </div>
        </div>

        <div class="pt-3 lg:w-2/3 lg:py-0">
          <div
            class="flex h-full flex-col border border-black dark:border-white"
          >
            <Play
              class="min-h-[32rem] lg:min-h-full"
              v-if="state"
              :mod="state.mod"
              :tick="0"
            />
          </div>
        </div>
      </div>

      <div class="flex w-full self-center px-3 pb-28 pt-3 lg:max-w-[64rem]">
        <div class="lg:w-1/3"></div>

        <div class="flex w-full flex-col lg:w-2/3">
          <div>
            <Lang class="text-lg lg:text-xl">
              <template #zh>
                点击<span class="font-bold text-rose-500 dark:text-rose-400"
                  >红边</span
                >，以观察反应。
              </template>
              <template #en>
                Click
                <span class="font-bold text-rose-500 dark:text-rose-400"
                  >red edges</span
                >
                to observe interactions.
              </template>
            </Lang>
          </div>

          <Lang class="text-lg lg:text-xl">
            <template #zh>
              去<RouterLink
                :to="`/playground/${Base64.encode(code)}`"
                class="font-bold underline decoration-2 underline-offset-4"
                >演算场</RouterLink
              >，以修改代码。
            </template>
            <template #en>
              Goto
              <RouterLink
                :to="`/playground/${Base64.encode(code)}`"
                class="font-bold underline decoration-2 underline-offset-4"
                >The Playground</RouterLink
              >
              to edit the code.
            </template>
          </Lang>
        </div>
      </div>

      <div class="flex w-full self-center px-3 pt-10 lg:max-w-[64rem]">
        <div class="lg:w-1/3"></div>

        <div class="w-full lg:w-2/3">
          <div class="text-blance text-2xl font-bold lg:text-3xl">
            <Lang>
              <template #zh> 语言 </template>
              <template #en> The Language </template>
            </Lang>
          </div>

          <div class="py-1 text-lg lg:text-xl">
            <Lang>
              <template #zh>
                <span class="font-bold">iNet</span> 有 <br />
                {{ sections.statements.title.zh }}，<br />
                {{ sections.expressions.title.zh }}，<br />
                {{ sections.builtins.title.zh }}。<br />
              </template>
              <template #en>
                <span class="font-bold">iNet</span> has <br />
                {{ sections.statements.title.en }}, <br />
                {{ sections.expressions.title.en }}, <br />
                {{ sections.builtins.title.en }}. <br />
              </template>
            </Lang>
          </div>
        </div>
      </div>

      <div
        class="flex w-full flex-col items-start space-y-6 self-center px-3 pt-3 lg:max-w-[64rem] lg:pt-4"
      >
        <div
          v-for="({ illustrations, title }, key) of sections"
          :key="key"
          class="w-full"
        >
          <div class="flex w-full flex-col lg:flex-row lg:pb-1">
            <div class="lg:w-1/3"></div>
            <div
              class="overflow-auto text-start text-xl font-bold lg:w-2/3 lg:text-2xl"
            >
              <Lang>
                <template #zh> {{ title.zh }} </template>
                <template #en> {{ title.en }} </template>
              </Lang>
            </div>
          </div>

          <div
            v-for="(illustration, index) of illustrations"
            :key="index"
            class="flex w-full flex-col lg:flex-row"
          >
            <div class="pb-2 pr-6 pt-2 text-lg lg:w-1/3 lg:pt-6 lg:text-xl">
              <div class="font-bold">{{ illustration.name }}</div>

              <Lang>
                <template #zh>
                  <div>{{ illustration.description.zh }}</div>
                </template>
                <template #en>
                  <div>{{ illustration.description.en }}</div>
                </template>
              </Lang>
            </div>

            <div
              class="overflow-auto border-2 border-black dark:border-white lg:w-2/3"
              :class="{
                'lg:border-b-0': index === 0,
                'lg:border-t-0':
                  index !== 0 && index === illustrations.length - 1,
                'lg:border-y-0':
                  index !== 0 && index !== illustrations.length - 1,
              }"
            >
              <pre class="p-4 font-code text-base lg:p-6 lg:text-lg">{{
                illustration.code
              }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFoot />
  </PageLayout>
</template>
