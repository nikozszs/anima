<template>
  <div class="container">
    <ListCategory :lastItem="product?.title"/>

  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import ListCategory from '@/components/ui/ListCategory.vue';
import { products } from '@/data/products';
import { useRoute } from 'vue-router';
export default {
  components: {ListCategory},
  setup() {
    const route = useRoute()
    const product = computed(() => products.find(a => a.id === Number(route.params.id)))
    return {product}
  }
}
</script>

<style scoped>
.container {
  padding: 24px 100px 63px
}
</style>