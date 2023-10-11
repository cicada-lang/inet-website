<script setup lang="ts">
import PageFoot from './PageFoot.vue'
import PageHead from './PageHead.vue'
</script>

<template>
  <div
    class="h-screen-dynamic flex flex-col overflow-auto dark:bg-black dark:text-white"
  >
    <PageHead class="px-3 py-2" />

    <div class="h-full">
      <slot />
    </div>

    <PageFoot />
  </div>
</template>
