<script setup lang="ts">
import IconGithub from "../../components/icons/IconGithub.vue"
import PageLogo from "../../layouts/page-layout/PageLogo.vue"
import PlaygroundToolbar from "./PlaygroundToolbar.vue"
import { State } from "./State"

defineProps<{
  state: State
}>()
</script>

<template>
  <div
    class="flex items-center justify-between border-b border-black px-3 py-2"
  >
    <div class="flex items-baseline space-x-2">
      <PageLogo />

      <RouterLink to="/playground" class="text-2xl">
        Playground
      </RouterLink>
    </div>

    <div class="flex items-center space-x-2">
      <a href="https://github.com/cicada-lang/inet" target="_blank">
        <IconGithub class="h-5 w-5" />
      </a>
      <PlaygroundToolbar :state="state" />
    </div>
  </div>
</template>
./State
