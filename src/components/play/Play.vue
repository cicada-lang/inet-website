<script setup lang="ts">
import { Mod } from '@cicada-lang/inet'
import { ref, watch } from 'vue'
import { main } from './main'

const props = defineProps<{
  mod: Mod
}>()

const containerElement = ref<HTMLDivElement | undefined>(undefined)
const canvasElement = ref<HTMLCanvasElement | undefined>(undefined)

watch(
  canvasElement,
  () => {
    if (canvasElement.value && containerElement.value) {
      main(canvasElement.value, containerElement.value, props.mod)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="h-full w-full" ref="containerElement">
    <canvas ref="canvasElement"></canvas>
  </div>
</template>
