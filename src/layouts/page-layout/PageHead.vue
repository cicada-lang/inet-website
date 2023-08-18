<script setup lang="ts">
import IconGithub from "../../components/icons/IconGithub.vue"
import PageLogo from "./PageLogo.vue"
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <RouterLink to="/"> <PageLogo /> </RouterLink>
    </div>

    <div class="flex items-center space-x-4">
      <RouterLink to="/playground" class="text-xl"> Playground </RouterLink>

      <a
        target="_blank"
        href="https://readonly.link/books/https://cdn.inet.cic.run/docs/books/programming-with-interaction-nets/book.json"
        class="text-xl"
      >
        Docs
      </a>

      <a target="_blank" href="https://github.com/cicada-lang/inet">
        <IconGithub class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>
