<template>
  <div>
    <TheNavbar />
    <div class="container with-nav">
      <router-view />
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