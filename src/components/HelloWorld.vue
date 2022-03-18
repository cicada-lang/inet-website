<template>
  <div>
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
  </div>
</template>

<script setup>
defineProps({ msg: String })
</script>
