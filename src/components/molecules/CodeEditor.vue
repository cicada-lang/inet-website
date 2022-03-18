<template>
  <div class="h-full">
    <textarea
      spellcheck="false"
      class="h-full w-full overflow-y-auto whitespace-pre px-3 py-2 font-mono text-base"
      v-model="state.text"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  state: Object,
})
</script>
