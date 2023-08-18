<script setup lang="ts">
import { useRoute } from "vue-router"
import PageLogo from "./PageLogo.vue"
import IconGitHub from "../../components/icons/IconGitHub.vue"

const route = useRoute()
</script>

<template>
  <div class="flex items-baseline justify-between">
    <div class="flex items-baseline pr-4">
      <RouterLink to="/"> <PageLogo /> </RouterLink>
    </div>

    <div class="flex items-baseline space-x-4">
      <RouterLink
        to="/playground"
        class="text-xl hover:underline underline-offset-4 decoration-2"
        :class="{
          underline: route.path.startsWith('/playground'),
        }"
      >
        Playground
      </RouterLink>

      <a
        target="_blank"
        href="https://readonly.link/books/https://cdn.inet.cic.run/docs/books/programming-with-interaction-nets/book.json"
        class="text-xl hover:underline underline-offset-4 decoration-2"
      >
        Docs
      </a>

      <a
        target="_blank"
        href="https://github.com/cicada-lang/inet"
        class="text-xl hover:underline underline-offset-4 decoration-2"
      >
        <IconGitHub class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>
