<script setup lang="ts">
import { State } from "./State"
import { stateReload } from "./stateReload"

defineProps<{
  state: State
}>()

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
      @click="stateReload(state)"
    >
      Run
    </button>
    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
      @click="share()"
    >
      Share
    </button>
  </div>
</template>
