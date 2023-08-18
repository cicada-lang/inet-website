<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageLogo from './PageLogo.vue'

const route = useRoute()
</script>

<template>
  <div class="flex-wrap flex items-baseline">
    <RouterLink to="/" class="pr-4"> <PageLogo /> </RouterLink>

    <RouterLink
      to="/playground"
      class="pr-4 text-xl hover:underline underline-offset-4 decoration-2"
      :class="{
        underline: route.path.startsWith('/playground'),
      }"
    >
      Playground
    </RouterLink>

    <a
      target="_blank"
      href="https://readonly.link/books/https://cdn.inet.cic.run/docs/books/programming-with-interaction-nets/book.json"
      class="pr-4 text-xl hover:underline underline-offset-4 decoration-2"
    >
      Docs
    </a>

    <a
      target="_blank"
      href="https://github.com/cicada-lang/inet"
      class="text-xl pr-4 hover:underline underline-offset-4 decoration-2"
    >
      GitHub
    </a>

    <RouterLink
      to="/settings"
      class="text-xl pr-4 flex items-center hover:underline underline-offset-4 decoration-2"
      :class="{
        underline: route.path.startsWith('/settings'),
      }"
    >
      Settings
    </RouterLink>
  </div>
</template>
