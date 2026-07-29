<template>
  <div>
    <HomeSectionMain />
    <HomeSectionAdvantages />
    <HomeSectionItems />
    <HomeSectionSales />
  </div>
</template>

<script lang="ts">
import {} from 'vue'
import HomeSectionMain from '../components/ui/homePage/HomeSectionMain.vue';
import HomeSectionAdvantages from '../components/ui/homePage/HomeSectionAdvantages.vue';
import HomeSectionItems from '../components/ui/homePage/HomeSectionItems.vue';
import HomeSectionSales from '../components/ui/homePage/HomeSectionSales.vue';
export default {
  components: {
    HomeSectionMain,
    HomeSectionAdvantages,
    HomeSectionItems,
    HomeSectionSales
  },
  setup(){}
}
</script>

<style scoped>
/* стили */
</style>