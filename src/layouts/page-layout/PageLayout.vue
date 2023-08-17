<script setup lang="ts">
import PageHeader from "./PageHeader.vue"
import PageFooter from "./PageFooter.vue"
</script>

<template>
  <div class="flex h-screen flex-col">
    <PageHeader class="bg-theme-500 px-3 py-2 text-white" />
    <div class="h-full overflow-y-auto">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>
