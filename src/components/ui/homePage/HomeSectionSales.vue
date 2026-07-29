<template>
  <section class="container-section-sales">
    <AppWatchButton path="/sales" color="white" />
    <div class="container-current-sales">
      <div class="container-current-sales-first"></div>
      <div class="container-current-sales-second">
        <AppCardSales v-for="item in salesItems"
          :key="item.id"
          :image="item.image"
          :new-price="item.newPrice"
          :old-price="item.oldPrice"
          :is-sale="item.isSale"
          :title="item.title"
          :subtitle="item.subtitle"
          />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {} from 'vue'
import AppWatchButton from '../AppWatchButton.vue';
import {salesItems} from '../../../data/sales.ts'
import AppCardSales from '../AppCardSales.vue';
export default {
  components: {AppWatchButton, AppCardSales},
  setup(){
    return {salesItems}
  }
}
</script>

<style scoped>
.container-section-sales {
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url('../../../assets/backgroundSales.jpg');
  background-size: cover;
  padding: 57px 101px 100px 0;
}

.container-current-sales {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
}

.container-current-sales-second {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
</style>