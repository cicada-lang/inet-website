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
  <div class="flex space-x-4">
    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
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
      class="text-xl hover:underline underline-offset-4 decoration-2"
      :class="{
        underline: state.kind === 'Stage',
      }"
      @click="state.kind = 'Stage'"
    >
      <Lang class="inline">
        <template #zh> 舞台 </template>
        <template #en> Stage </template>
      </Lang>
    </button>
  </div>
</template>
