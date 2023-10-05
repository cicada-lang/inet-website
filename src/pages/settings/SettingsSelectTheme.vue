<script setup lang="ts">
import FormRadio from '../../components/form/FormRadio.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalTheme } from '../../reactives/useGlobalTheme'

const theme = useGlobalTheme()
</script>

<template>
  <Lang>
    <template #zh>
      <FormRadio
        name="theme"
        v-model="theme.name"
        :entries="[
          { value: 'system', label: '跟随系统' },
          { value: 'light', label: '浅色模式' },
          { value: 'dark', label: '深色模式' },
        ]"
      >
        <template #label>
          <span>主题</span>
        </template>
      </FormRadio>
    </template>

    <template #en>
      <FormRadio
        name="theme"
        v-model="theme.name"
        :entries="[
          { value: 'system', label: 'Follow the system' },
          { value: 'light', label: 'Light mode' },
          { value: 'dark', label: 'Dark mode' },
        ]"
      >
        <template #label>
          <span>Theme</span>
        </template>
      </FormRadio>
    </template>
  </Lang>
</template>
