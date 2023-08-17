<script setup lang="ts">
import PageFooter from "./PageFooter.vue"
import PageHeader from "./PageHeader.vue"
</script>

<template>
  <div class="flex h-screen flex-col">
    <PageHeader class="px-3 py-2 " />
    <div class="h-full overflow-y-auto">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>
