<template>
  <a :href="icon.href" target="_blank" class="container">
    <img :src="icon.src" :alt="icon.alt">
  </a>
</template>

<script lang="ts">
import type {Icon} from '@/data/icons.ts'
export default {
  props: {
    icon: {
      type: Object as () => Icon,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  padding: 8px 9.5px;
  background: var(--third-color);
  border-radius: 8px;
}
</style>