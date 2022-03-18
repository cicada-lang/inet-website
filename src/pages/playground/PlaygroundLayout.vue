<template>
  <div class="h-screen flex flex-col text-xl">
    <PlaygroundHeader class="p-2 bg-rose-500 text-white" />
    <slot />
    <PlaygroundFooter />
  </div>
</template>

<script setup>
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundFooter from "./PlaygroundFooter.vue"
</script>
