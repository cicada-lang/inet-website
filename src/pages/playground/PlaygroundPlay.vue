<script setup lang="ts">
import { State } from './State'
import Play from '../../components/play/Play.vue'

defineProps<{
  state: State
}>()
</script>

<template>
  <Play :mod="state.mod" />
</template>
