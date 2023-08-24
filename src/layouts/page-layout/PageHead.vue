<script setup lang="ts">
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'

const route = useRoute()
</script>

<template>
  <div class="flex-wrap flex md:justify-between">
    <RouterLink to="/" class="flex items-baseline text-xl font-bold pr-4">
      iNet
    </RouterLink>

    <div class="flex-wrap flex">
      <RouterLink
        to="/playground"
        class="pr-4 text-xl hover:underline underline-offset-4 decoration-2"
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
        class="text-xl pr-4 flex items-center hover:underline underline-offset-4 decoration-2"
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
        href="https://readonly.link/books/https://cdn.inet.cic.run/docs/books/programming-with-interaction-nets/book.json"
        class="pr-4 text-xl hover:underline underline-offset-4 decoration-2"
      >
        <Lang>
          <template #zh> 文档 </template>
          <template #en> Docs </template>
        </Lang>
      </a>

      <a
        target="_blank"
        href="https://github.com/cicada-lang/inet"
        class="text-xl hover:underline underline-offset-4 decoration-2"
      >
        <Lang>
          <template #zh> GitHub </template>
          <template #en> GitHub </template>
        </Lang>
      </a>
    </div>
  </div>
</template>
