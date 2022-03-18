<template>
  <div class="flex h-screen flex-col text-xl">
    <PlaygroundHeader class="bg-rose-500 px-3 py-2 text-white" />
    <div class="h-full">
      <slot />
    </div>
    <PlaygroundFooter />
  </div>
</template>

<script setup>
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundFooter from "./PlaygroundFooter.vue"
</script>
