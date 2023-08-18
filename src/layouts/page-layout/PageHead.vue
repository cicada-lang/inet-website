<script setup lang="ts">
import IconGithub from "../../components/icons/IconGithub.vue"
import PageLogo from "./PageLogo.vue"
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <RouterLink to="/"> <PageLogo /> </RouterLink>
    </div>

    <div  class="flex items-center space-x-2">
      <RouterLink to="/playground"  class="text-lg"> Playground </RouterLink>

      <a href="https://github.com/cicada-lang/inet" target="_blank">
        <IconGithub class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>
