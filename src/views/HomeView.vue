<template>
  <div>
    <HomeSectionMain />
    <HomeSectionAdvantages />
    <HomeSectionItems />
    <HomeSectionSales />
    <HomeSectionIdeas />
  </div>
</template>

<script lang="ts">
import {} from 'vue'
import HomeSectionMain from '@/components/ui/homePage/HomeSectionMain.vue';
import HomeSectionAdvantages from '@/components/ui/homePage/HomeSectionAdvantages.vue';
import HomeSectionItems from '@/components/ui/homePage/HomeSectionItems.vue';
import HomeSectionSales from '@/components/ui/homePage/HomeSectionSales.vue';
import HomeSectionIdeas from '@/components/ui/homePage/HomeSectionIdeas.vue';
export default {
  components: {
    HomeSectionMain,
    HomeSectionAdvantages,
    HomeSectionItems,
    HomeSectionSales,
    HomeSectionIdeas,
  },
  setup(){}
}
</script>

<style scoped>
/* стили */
</style>