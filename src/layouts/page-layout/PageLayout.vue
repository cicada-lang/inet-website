<script setup lang="ts">
import PageFoot from './PageFoot.vue'
import PageHead from './PageHead.vue'
</script>

<template>
  <div
    class="flex h-screen-dynamic flex-col dark:bg-stone-800 dark:text-white overflow-auto"
  >
    <PageHead class="px-3 py-2" />

    <div class="h-full">
      <slot />
    </div>

    <PageFoot />
  </div>
</template>
