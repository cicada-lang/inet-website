<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import SettingsSelectLang from './SettingsSelectLang.vue'
import SettingsSelectTheme from './SettingsSelectTheme.vue'

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">设置 | iNet</title>
      <title v-else>Settings | iNet</title>
    </Head>

    <div
      class="font-content border-t border-black dark:border-white flex h-full flex-col space-y-3 overflow-y-auto p-3 text-xl"
    >
      <div class="flex flex-col space-y-2 sm:w-[27rem]">
        <div class="flex items-baseline">
          <div class="font-logo text-2xl font-bold">
            <Lang>
              <template #zh> 应用设置 </template>
              <template #en> App Settings </template>
            </Lang>
          </div>
        </div>

        <SettingsSelectLang />

        <SettingsSelectTheme />
      </div>
    </div>
  </PageLayout>
</template>
