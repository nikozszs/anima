<template>
  <div>
    <TheNavbar />
    <div>
      <slot></slot>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import TheFooter from '../TheFooter.vue';
import TheNavbar from '../TheNavbar.vue'

export default {
  components: {TheNavbar, TheFooter}
  }
</script>

<style scoped>
/* стили */
</style>