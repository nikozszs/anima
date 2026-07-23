<template>
  <div>
    <HomeSectionMain />
    <HomeSectionAdvantages />
    <HomeSectionItems />
  </div>
</template>

<script lang="ts">
import {} from 'vue'
import HomeSectionMain from '../components/ui/homePage/HomeSectionMain.vue';
import HomeSectionAdvantages from '../components/ui/homePage/HomeSectionAdvantages.vue';
import HomeSectionItems from '../components/ui/homePage/HomeSectionItems.vue';
export default {
  components: {HomeSectionMain, HomeSectionAdvantages, HomeSectionItems},
  setup(){}
}
</script>

<style scoped>
/* стили */
</style>