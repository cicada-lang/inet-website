<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeFoot from './HomeFoot.vue'
import { builtins } from './builtins'
import { main } from './main'
import { statements } from './statements'
import { words } from './words'

type TabName = 'statements' | 'words' | 'builtins'
const tabName = ref<TabName>('statements')
const tabs = {
  statements,
  words,
  builtins,
}
</script>

<template>
  <PageLayout>
    <div class="flex flex-col p-3">
      <div class="w-full flex flex-col md:max-w-3xl self-center px-6">
        <div class="text-7xl text-blance pt-16 font-bold">iNet</div>
        <div class="text-3xl text-blance py-10">
          <Lang>
            <template #zh> 用可反应的网编程。 </template>
            <template #en> Programming with interaction nets. </template>
          </Lang>
        </div>
      </div>

      <div
        class="px-6 flex md:flex-row space-x-6 flex-col md:max-w-4xl my-12 w-full self-center"
      >
        <div class="border-2 border-black dark:border-white">
          <pre class="md:p-6 p-4 text-xl whitespace-pre font-code">{{
            main.code
          }}</pre>
        </div>

        <div class="text-xl w-full">
          <pre>TODO Canvas of rules.</pre>
        </div>
      </div>

      <div
        class="w-full md:max-w-sm ml-1.5 flex flex-col items-start px-6 pt-10 self-center"
      >
        <div class="text-2xl text-blance font-bold">
          <Lang>
            <template #zh> 语言 </template>
            <template #en> The Language </template>
          </Lang>
        </div>

        <div class="pt-4">
          <button
            class="block underline-offset-4 decoration-2 hover:underline text-2xl"
            :class="{
              underline: tabName === 'statements',
            }"
            @click="tabName = 'statements'"
          >
            <Lang>
              <template #zh> 8 种语句 </template>
              <template #en> 8 kinds of statements </template>
            </Lang>
          </button>
          <button
            class="block underline-offset-4 decoration-2 hover:underline text-2xl"
            :class="{
              underline: tabName === 'words',
            }"
            @click="tabName = 'words'"
          >
            <Lang>
              <template #zh> 7 种词 </template>
              <template #en> 7 kinds of words </template>
            </Lang>
          </button>
          <button
            class="block underline-offset-4 decoration-2 hover:underline text-2xl"
            :class="{
              underline: tabName === 'builtins',
            }"
            @click="tabName = 'builtins'"
          >
            <Lang>
              <template #zh> 6 个预定义词 </template>
              <template #en> 6 built-in words </template>
            </Lang>
          </button>
        </div>
      </div>

      <div
        class="w-full space-y-6 md:max-w-[64rem] flex flex-col items-start px-6 pt-4 self-center"
      >
        <div v-for="(examples, name) of tabs" :key="name" class="w-full">
          <div
            v-for="(example, index) of examples"
            :key="index"
            class="flex md:flex-row flex-col w-full"
          >
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">{{ example.name }}</div>

              <Lang>
                <template #zh>
                  <div
                    v-for="(line, index) of example.description.zh"
                    :key="index"
                  >
                    {{ line }}
                  </div>
                </template>
                <template #en>
                  <div
                    v-for="(line, index) of example.description.en"
                    :key="index"
                  >
                    {{ line }}
                  </div>
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
              <pre class="md:p-6 p-4 text-xl font-code">{{ example.code }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFoot />
  </PageLayout>
</template>
