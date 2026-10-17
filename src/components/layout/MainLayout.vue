<template>
  <div>
    <TheNavbar />
    <div>
      <slot></slot>
    </div>
    <TheFooter v-if="!isNotFound" />
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheFooter from '../TheFooter.vue';
import TheNavbar from '../TheNavbar.vue'

export default {
  components: {TheNavbar, TheFooter},
  setup() {
    const route = useRoute()
    const isNotFound = computed(() => route.name === 'not-found')

    return {isNotFound}
  }
  }
</script>