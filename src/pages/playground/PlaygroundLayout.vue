<template>
  <div>
    <PlaygroundHeader />
    <slot />
    <PlaygroundFooter />
  </div>
</template>

<script setup>
import PlaygroundHeader from "./PlaygroundHeader.vue"
import PlaygroundFooter from "./PlaygroundFooter.vue"
</script>
