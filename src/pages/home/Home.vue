<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

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
          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">type</div>

              <Lang>
                <template #zh>
                  <div>定义一个类型</div>
                </template>
                <template #en>
                  <div>define a type</div>
                </template>
              </Lang>
            </div>

            <div
              class="md:border-b-0 overflow-auto border-2 md:w-2/3 border-black dark:border-white"
            >
              <pre class="md:p-6 p-4 text-xl font-code">type Nat -- Type end</pre>
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">node</div>

              <Lang>
                <template #zh>
                  <div>定义一个节点</div>
                </template>
                <template #en>
                  <div>define a node</div>
                </template>
              </Lang>
            </div>

            <div
              class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white"
            >
              <pre class="md:p-6 p-4 text-xl font-code">
node zero -- Nat :value! end

node add1 Nat :prev -- Nat :value! end

node add
  Nat :target!
  Nat :addend
  -----------
  Nat :return
end
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">rule</div>

              <Lang>
                <template #zh>
                  <div>针对两个节点</div>
                  <div>定义一条规则</div>
                </template>
                <template #en>
                  <div>define a rule</div>
                  <div>between two nodes</div>
                </template>
              </Lang>
            </div>

            <div class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white">
              <pre class="md:p-6 p-4 text-xl font-code">
rule zero add
  (add)-addend
  return-(add)
end

rule add1 add
  (add)-addend
  (add1)-prev add
  add1 return-(add)
end
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">claim</div>

              <Lang>
                <template #zh>
                  <div>在定义一个词之前</div>
                  <div>声明这个词的类型</div>
                </template>
                <template #en>
                  <div>claim the type of a word</div>
                  <div>before defining the word</div>
                </template>
              </Lang>
            </div>

            <div class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white">
              <pre class="md:p-6 p-4 text-xl font-code">
claim one -- Nat end
claim two -- Nat end
claim three -- Nat end
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">define</div>

              <Lang>
                <template #zh>
                  <div>定义一个词</div>
                </template>
                <template #en>
                  <div>define a word</div>
                </template>
              </Lang>
            </div>

            <div class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white">
              <pre class="md:p-6 p-4 text-xl font-code">
define one zero add1 end
define two one one add end
define three two one add end
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">check</div>

              <Lang>
                <template #zh>
                  <div>检查一段话</div>
                  <div>是否符合类型</div>
                </template>
                <template #en>
                  <div>check if a sentence</div>
                  <div>is of given type</div>
                </template>
              </Lang>
            </div>

            <div class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white">
              <pre class="md:p-6 p-4 text-xl font-code">
check
  Nat Nat -- Nat
then
  add
end

check
  Nat -- Nat
then
  one add
end
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">import</div>

              <Lang>
                <template #zh>
                  <div>从模块引入某些定义</div>
                </template>
                <template #en>
                  <div>import definitions</div>
                  <div>from module</div>
                </template>
              </Lang>
            </div>

            <div class="md:border-y-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white">
              <pre class="md:p-6 p-4 text-xl font-code">
import Nat, zero, add1, add from "./Nat.i"

import
   one, two, three
from "https://cdn.inet.run/tests/datatype/Nat.i"
</pre
              >
            </div>
          </div>

          <div class="flex md:flex-row flex-col w-full">
            <div class="text-2xl md:w-1/3 md:text-end pr-6 pt-6 pb-2">
              <div class="font-bold">require</div>

              <Lang>
                <template #zh>
                  <div>从模块引入所有定义</div>
                </template>
                <template #en>
                  <div>import all definitions</div>
                  <div>from module</div>
                </template>
              </Lang>
            </div>

            <div
              class="md:border-b-0 border-2 overflow-auto md:w-2/3 border-black dark:border-white"
            >
              <pre class="md:p-6 p-4 text-xl font-code">
require "./Nat.i"
</pre
              >
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
  </PageLayout>
</template>
