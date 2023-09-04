<script setup lang="ts">
import { Base64 } from 'js-base64'
import { onMounted, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import Play from '../../components/play/Play.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeFoot from './HomeFoot.vue'
import { State } from './State'
import { code, codeFragment } from './example'
import { loadState } from './loadState'
import { sections } from './sections'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await loadState({
    text: code,
  })
})
</script>

<template>
  <PageLayout>
    <div class="flex flex-col">
      <div class="w-full flex flex-col lg:max-w-[64rem] self-center px-3 py-32">
        <div class="text-7xl text-blance font-bold">iNet</div>
        <div class="text-4xl text-blance pt-2">
          <Lang>
            <template #zh> 用可反应的网编程。 </template>
            <template #en> Programming with interaction nets. </template>
          </Lang>
        </div>
      </div>

      <div
        class="px-3 flex lg:flex-row flex-col lg:max-w-[64rem] w-full self-center"
      >
        <div class="lg:w-1/3 lg:pr-3">
          <div class="border-2 border-black dark:border-white">
            <pre
              class="lg:p-6 p-4 lg:text-lg text-base whitespace-pre font-code"
              >{{ codeFragment }}</pre
            >
          </div>
        </div>

        <div class="lg:py-0 pt-3 lg:w-2/3">
          <div
            class="flex-col flex h-full border border-black dark:border-white"
          >
            <Play
              class="lg:min-h-full min-h-[32rem]"
              v-if="state"
              :mod="state.mod"
              :tick="0"
            />
          </div>
        </div>
      </div>

      <div class="w-full lg:max-w-[64rem] flex px-3 pt-3 pb-28 self-center">
        <div class="lg:w-1/3"></div>

        <div class="w-full lg:w-2/3 flex flex-col">
          <div>
            <Lang class="lg:text-xl text-lg">
              <template #zh> 点击红边，以观察反应。 </template>
              <template #en>
                Click red edges to observe interactions.
              </template>
            </Lang>
          </div>

          <Lang class="lg:text-xl text-lg">
            <template #zh>
              去<RouterLink
                :to="`/playground/${Base64.encode(code)}`"
                class="underline underline-offset-4 decoration-2"
                >演算场</RouterLink
              >，以修改代码。
            </template>
            <template #en>
              Goto
              <RouterLink
                :to="`/playground/${Base64.encode(code)}`"
                class="underline underline-offset-4 decoration-2"
              >
                The Playground
              </RouterLink>
              to edit the code.
            </template>
          </Lang>
        </div>
      </div>

      <div class="w-full lg:max-w-[64rem] flex px-3 pt-10 self-center">
        <div class="lg:w-1/3"></div>

        <div class="w-full lg:w-2/3">
          <div class="lg:text-3xl text-2xl text-blance font-bold">
            <Lang>
              <template #zh> 语言 </template>
              <template #en> The Language </template>
            </Lang>
          </div>

          <div class="lg:text-xl text-lg py-1">
            <Lang>
              <template #zh>
                <span class="font-bold">iNet</span> 有 <br />
                8 种语句，<br />
                7 种词，<br />
                6 个预定义词。<br />
              </template>
              <template #en>
                <span class="font-bold">iNet</span> has <br />
                8 kinds of statements, <br />
                7 kinds of words, <br />
                6 built-in words. <br />
              </template>
            </Lang>
          </div>
        </div>
      </div>

      <div
        class="w-full space-y-6 lg:max-w-[64rem] flex flex-col items-start px-3 lg:pt-4 pt-3 self-center"
      >
        <div
          v-for="{ name, examples, title } of sections"
          :key="name"
          class="w-full"
        >
          <div class="flex lg:flex-row flex-col w-full lg:pb-1">
            <div class="lg:w-1/3"></div>
            <div
              class="overflow-auto lg:w-2/3 text-start lg:text-2xl text-xl font-bold"
            >
              <Lang>
                <template #zh> {{ title.zh }} </template>
                <template #en> {{ title.en }} </template>
              </Lang>
            </div>
          </div>

          <div
            v-for="(example, index) of examples"
            :key="index"
            class="flex lg:flex-row flex-col w-full"
          >
            <div class="lg:text-xl text-lg lg:w-1/3 pr-6 lg:pt-6 pt-2 pb-2">
              <div class="font-bold">{{ example.name }}</div>

              <Lang>
                <template #zh>
                  <div>{{ example.description.zh }}</div>
                </template>
                <template #en>
                  <div>{{ example.description.en }}</div>
                </template>
              </Lang>
            </div>

            <div
              class="overflow-auto border-2 lg:w-2/3 border-black dark:border-white"
              :class="{
                'lg:border-b-0': index === 0,
                'lg:border-t-0': index !== 0 && index === examples.length - 1,
                'lg:border-y-0': index !== 0 && index !== examples.length - 1,
              }"
            >
              <pre class="lg:p-6 p-4 lg:text-lg text-base font-code">{{
                example.code
              }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFoot />
  </PageLayout>
</template>
