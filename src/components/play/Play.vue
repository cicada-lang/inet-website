<script setup lang="ts">
import { Mod } from '@cicada-lang/inet'
import { onMounted, ref, watch } from 'vue'
import { State } from './State'
import { animate } from './animate'
import { createState } from './createState'
import { trackMouse } from './mouse/trackMouse'
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
    resizeCanvas(canvasElement.value, containerElement.value)
    state.value = createState({
      canvas: canvasElement.value,
      mod: props.mod,
    })

    trackMouse(state.value.mouse)
    stateRefresh(state.value)
    animate(state.value)
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
  <div class="h-full w-full" ref="containerElement">
    <canvas ref="canvasElement"></canvas>
  </div>
</template>
./stateCurrent
