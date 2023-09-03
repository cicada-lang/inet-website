<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'

defineProps<{
  state: State
}>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="border-b flex lg:border-t-0 border-t dark:border-white border-black"
  >
    <button
      class="text-xl hover:underline underline-offset-4 decoration-2 border-r px-3 py-2 border-black dark:border-white"
      :class="{
        underline: state.kind === 'Play',
      }"
      @click="state.kind = 'Play'"
    >
      <Lang class="inline">
        <template #zh> 演算 </template>
        <template #en> Play </template>
      </Lang>
    </button>

    <button
      v-if="state.output"
      class="px-3 py-2 text-xl hover:underline underline-offset-4 decoration-2 border-r border-black dark:border-white"
      :class="{
        underline: state.kind === 'Output',
      }"
      @click="state.kind = 'Output'"
    >
      <Lang>
        <template #zh> 输出 </template>
        <template #en> Output </template>
      </Lang>
    </button>

    <button
      v-if="state.errorMessage"
      class="px-3 py-2 text-xl hover:underline text-rose-500 dark:text-rose-400 underline-offset-4 decoration-2 border-r border-black dark:border-white"
      :class="{
        underline: state.kind === 'Error',
      }"
      @click="state.kind = 'Error'"
    >
      <Lang>
        <template #zh> 错误 </template>
        <template #en> Error </template>
      </Lang>
    </button>
  </div>
</template>
