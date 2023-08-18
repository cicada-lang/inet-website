<script setup lang="ts">
import { ref } from 'vue'
import { State } from './State'
import { stateReload } from './stateReload'

const props = defineProps<{
  state: State
}>()

const timeUsedToRun = ref<number | undefined>(undefined)

async function run() {
  timeUsedToRun.value = undefined
  const timeBefore = performance.now()
  await stateReload(props.state)
  const timeAdter = performance.now()
  timeUsedToRun.value = timeAdter - timeBefore
}

async function share() {
  try {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    window.alert(`URL copied to clipboard!`)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex space-x-4">
    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
      @click="share()"
    >
      Share
    </button>

    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
      @click="run()"
    >
      Run

      <span v-if="timeUsedToRun" class="text-stone-500 dark:text-stone-300 text-base"
        >({{ Math.floor(timeUsedToRun) }} ms)</span
      >
    </button>
  </div>
</template>
