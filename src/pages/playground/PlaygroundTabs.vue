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
    class="flex border-b border-t border-black dark:border-white lg:border-t-0"
  >
    <button
      class="border-r border-black px-3 py-2 text-xl decoration-2 underline-offset-4 hover:underline dark:border-white"
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
      class="border-r border-black px-3 py-2 text-xl decoration-2 underline-offset-4 hover:underline dark:border-white"
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
      class="border-r border-black px-3 py-2 text-xl text-rose-500 decoration-2 underline-offset-4 hover:underline dark:border-white dark:text-rose-400"
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
