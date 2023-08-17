<script setup lang="ts">
import { PlaygroundState as State } from "./playground-state"

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
    <button class="font-cute text-base text-theme-900" @click="share()">
      SHARE
    </button>
  </div>
</template>
