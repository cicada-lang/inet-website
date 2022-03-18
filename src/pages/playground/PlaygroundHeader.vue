<template>
  <router-link
    to="/playground"
    class="flex items-center justify-between border-b border-rose-300 bg-rose-200 px-3 py-2"
  >
    <div class="font-cute text-xl font-semibold text-rose-900">Playground</div>
    <PlaygroundToolbar />
  </router-link>
</template>

<script setup>
import PlaygroundToolbar from "./PlaygroundToolbar.vue"
</script>
