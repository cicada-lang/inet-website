<script setup lang="ts">
import { State } from "./State"

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
  <div>
    <button class="text-lg" @click="share()">Share</button>
  </div>
</template>
./State
