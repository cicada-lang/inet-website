<template>
  <div class="h-screen flex flex-col text-xl">
    <PlaygroundHeader class="px-3 py-2 bg-rose-500 text-white" />
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
