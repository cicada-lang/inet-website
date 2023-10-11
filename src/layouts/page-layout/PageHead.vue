<script setup lang="ts">
import { useRoute } from 'vue-router'
import IconGitHub from '../../components/icons/IconGitHub.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
const route = useRoute()
</script>

<template>
  <div class="flex flex-wrap justify-between">
    <RouterLink to="/" class="flex items-baseline pr-4 text-xl font-bold">
      iNet
    </RouterLink>

    <div class="flex flex-wrap">
      <RouterLink
        to="/playground"
        class="pr-4 text-xl decoration-2 underline-offset-4 hover:underline"
        :class="{
          underline: route.path.startsWith('/playground'),
        }"
      >
        <Lang>
          <template #zh> 演算场 </template>
          <template #en> Playground </template>
        </Lang>
      </RouterLink>

      <RouterLink
        to="/settings"
        class="flex items-center pr-4 text-xl decoration-2 underline-offset-4 hover:underline"
        :class="{
          underline: route.path.startsWith('/settings'),
        }"
      >
        <Lang>
          <template #zh> 设置 </template>
          <template #en> Settings </template>
        </Lang>
      </RouterLink>

      <a
        target="_blank"
        :href="
          lang.isZh()
            ? 'https://readonly.link/articles/https://code-of-inet-js.fidb.app/docs/articles/反应网编程.md'
            : 'https://readonly.link/articles/https://code-of-inet-js.fidb.app/docs/articles/programming-with-interaction-nets.md'
        "
        class="pr-4 text-xl decoration-2 underline-offset-4 hover:underline"
      >
        <Lang>
          <template #zh> 文档 </template>
          <template #en> Docs </template>
        </Lang>
      </a>

      <a
        target="_blank"
        href="https://github.com/cicada-lang/inet-js"
        class="mt-1"
      >
        <IconGitHub class="h-5 w-5" />
      </a>
    </div>
  </div>
</template>
