<template>
  <div>
    <button class="font-cute text-base text-rose-900" @click="share()">
      SHARE
    </button>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

import { PlaygroundState as State } from "./playground-state"

const route = useRoute()

const props = defineProps({
  state: State,
})

async function share() {
  try {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    window.alert(`URL copied to clipboard!`)
  } catch (error) {
    window.alert(error.message)
  }
}
</script>
