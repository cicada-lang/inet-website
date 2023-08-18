<script setup lang="ts">
import FormRadio from '../../components/form/FormRadio.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <FormRadio
    name="lang"
    v-model="lang.tag"
    :entries="[
      { value: 'zh', label: '中文' },
      { value: 'en', label: 'English' },
    ]"
  >
    <template #label>
      <div class="flex items-center">
        <Lang>
          <template #zh>语言</template>
          <template #en>Lang</template>
        </Lang>
      </div>
    </template>
  </FormRadio>
</template>
