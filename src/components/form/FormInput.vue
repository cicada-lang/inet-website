<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-ui">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center border border-black dark:border-white">
      <input
        class="w-full p-3 font-bold disabled:bg-stone-100 dark:bg-black dark:text-white dark:disabled:bg-stone-700"
        :id="name"
        :name="name"
        v-bind="$attrs"
      />

      <slot name="input-end" />
    </div>
  </div>
</template>
