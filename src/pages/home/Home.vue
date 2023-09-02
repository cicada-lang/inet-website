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
      <div class="w-full flex flex-col md:max-w-[64rem] self-center px-3 py-20">
        <div class="text-7xl text-blance font-bold">iNet</div>
        <div class="text-4xl text-blance pt-2">
          <Lang>
            <template #zh> 用可反应的网编程。 </template>
            <template #en> Programming with interaction nets. </template>
          </Lang>
        </div>
      </div>

      <div
        class="px-3 flex md:flex-row flex-col md:max-w-[64rem] w-full self-center"
      >
        <div class="md:w-1/3 border-2 border-black dark:border-white md:mr-3">
          <pre
            class="md:p-6 p-4 md:text-lg text-base whitespace-pre font-code"
            >{{ codeFragment }}</pre
          >
        </div>

        <div class="md:py-0 pt-3 md:w-2/3">
          <div class="flex h-full border border-black dark:border-white">
            <Play
              class="md:min-h-full min-h-[32rem]"
              v-if="state"
              :mod="state.mod"
              :tick="0"
            />
          </div>
        </div>
      </div>

      <div
        class="w-full md:max-w-[64rem] flex flex-col px-3 pt-1 items-end self-center"
      >
        <RouterLink :to="`/playground/${Base64.encode(code)}`">
          <Lang class="md:text-lg text-base hover:underline">
            <template #zh> 去演算场 </template>
            <template #en> Goto The Playground </template>
          </Lang>
        </RouterLink>
      </div>

      <div class="w-full md:max-w-[64rem] flex px-3 pt-10 self-center">
        <div class="md:w-1/3"></div>

        <div class="w-full md:w-2/3">
          <div class="md:text-3xl text-2xl text-blance font-bold">
            <Lang>
              <template #zh> 语言 </template>
              <template #en> The Language </template>
            </Lang>
          </div>

          <div class="md:text-xl text-lg py-1">
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
        class="w-full space-y-6 md:max-w-[64rem] flex flex-col items-start px-3 md:pt-4 pt-3 self-center"
      >
        <div
          v-for="{ name, examples, title } of sections"
          :key="name"
          class="w-full"
        >
          <div class="flex md:flex-row flex-col w-full md:pb-1">
            <div class="md:w-1/3"></div>
            <div
              class="overflow-auto md:w-2/3 text-start md:text-2xl text-xl font-bold"
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
            class="flex md:flex-row flex-col w-full"
          >
            <div class="md:text-xl text-lg md:w-1/3 pr-6 md:pt-6 pt-2 pb-2">
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
              class="overflow-auto border-2 md:w-2/3 border-black dark:border-white"
              :class="{
                'md:border-b-0': index === 0,
                'md:border-t-0': index !== 0 && index === examples.length - 1,
                'md:border-y-0': index !== 0 && index !== examples.length - 1,
              }"
            >
              <pre class="md:p-6 p-4 md:text-lg text-base font-code">{{
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
