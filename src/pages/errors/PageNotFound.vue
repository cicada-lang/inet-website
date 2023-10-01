<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
const route = useRoute()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">404 | FiDB</title>
      <title v-else>404 | FiDB</title>
    </Head>

    <div class="flex flex-col space-y-2 p-3">
      <div class="text-3xl">404</div>

      <div>
        <Lang>
          <template #zh>没有这个页面</template>
          <template #en>Page Not Found</template>
        </Lang>
      </div>

      <div class="overflow-x-auto">{{ route.fullPath }}</div>
    </div>
  </PageLayout>
</template>
