<script setup lang="ts">
import PageLogo from "./PageLogo.vue"
</script>

<template>
  <div class="flex items-baseline justify-between">
    <div class="flex items-baseline space-x-4">
      <RouterLink to="/"> <PageLogo /> </RouterLink>

      <slot></slot>
    </div>

    <div class="flex items-baseline space-x-4">
      <RouterLink to="/playground" class="text-xl"> Playground </RouterLink>

      <a
        target="_blank"
        href="https://readonly.link/books/https://cdn.inet.cic.run/docs/books/programming-with-interaction-nets/book.json"
        class="text-xl"
      >
        Docs
      </a>

      <a
        target="_blank"
        href="https://github.com/cicada-lang/inet"
        class="text-xl"
      >
        GitHub
      </a>
    </div>
  </div>
</template>
