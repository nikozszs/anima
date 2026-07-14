<template>
  <div>
    <TheNavbar />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import TheNavbar from '../TheNavbar.vue'

export default {
  components: {TheNavbar}
  }
</script>

<style scoped>
/* стили */
</style>