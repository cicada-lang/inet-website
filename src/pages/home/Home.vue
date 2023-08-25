<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import HomeFoot from './HomeFoot.vue'
import { statements } from './statements.ts'

type TabName = 'statements' | 'words' | 'builtins'
const tabName = ref<TabName>('statements')
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
          <pre class="md:p-6 p-4 text-xl whitespace-pre font-code">
rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end</pre
          >
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
        class="w-full md:max-w-[64rem] flex flex-col items-start px-6 pt-4 self-center"
      >
        <div v-show="tabName === 'statements'" class="w-full">
          <div
            v-for="(statement, index) of statements"
            :key="index"
            class="flex md:flex-row flex-col w-full"
          >
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">{{ statement.name }}</div>

              <Lang>
                <template #zh>
                  <div v-for="(line, index) of statement.description.zh">
                    {{ line }}
                  </div>
                </template>
                <template #en>
                  <div v-for="(line, index) of statement.description.en">
                    {{ line }}
                  </div>
                </template>
              </Lang>
            </div>

            <div
              class="overflow-auto border-2 md:w-2/3 border-black dark:border-white"
              :class="{
                'md:border-b-0': index === 0,
                'md:border-t-0': index !== 0 && index === statements.length - 1,
                'md:border-y-0': index !== 0 && index !== statements.length - 1,
              }"
            >
              <pre class="md:p-6 p-4 text-xl font-code">{{
                statement.code
              }}</pre>
            </div>
          </div>
        </div>

        <div v-show="tabName === 'words'" class="w-full">
          <div>Call</div>

          <div>Local</div>

          <div>TypeVar</div>

          <div>Label</div>

          <div>NodeRearrange</div>

          <div>PortPush</div>

          <div>PortReconnect</div>
        </div>

        <div v-show="tabName === 'builtins'" class="w-full">
          <div>connect</div>

          <div>inspect</div>

          <div>run</div>

          <div>swap</div>

          <div>rot</div>

          <div>Type</div>
        </div>
      </div>
    </div>

    <HomeFoot />
  </PageLayout>
</template>
