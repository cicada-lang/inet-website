<script setup lang="ts">
import { Mod } from '@cicada-lang/inet-js'
import { onMounted, ref, watch } from 'vue'
import { State } from './State'
import { createState } from './createState'
import { listenKeyboard } from './keyboard/listenKeyboard'
import { trackMouse } from './mouse/trackMouse'
import { renderLoop } from './renderLoop'
import { resizeCanvas } from './resizeCanvas'
import { stateRefresh } from './stateRefresh'

const props = defineProps<{
  mod: Mod
  tick: number
}>()

const state = ref<State | undefined>(undefined)
const containerElement = ref<HTMLDivElement | undefined>(undefined)
const canvasElement = ref<HTMLCanvasElement | undefined>(undefined)

onMounted(() => {
  if (canvasElement.value && containerElement.value) {
    state.value = createState({
      canvas: canvasElement.value,
      container: containerElement.value,
      mod: props.mod,
    })

    resizeCanvas(state.value)
    trackMouse(state.value)
    listenKeyboard(state.value)
    stateRefresh(state.value)
    renderLoop(state.value)
  }
})

watch(
  () => props.tick,
  () => {
    if (state.value) {
      state.value.mod = props.mod
      stateRefresh(state.value)
    }
  },
)
</script>

<template>
  <div class="h-full w-full overflow-hidden" ref="containerElement">
    <canvas
      @click="canvasElement?.focus()"
      tabindex="1"
      ref="canvasElement"
    ></canvas>
  </div>
</template>
