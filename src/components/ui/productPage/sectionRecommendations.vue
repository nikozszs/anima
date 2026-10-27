<template>
  <div class="container">
    <div class="decoration decoration-left"></div>
    <div class="flex-container">
      <h2 class="black-text text">рекомендованные товары</h2>
      <div class="container-button">
        <button
          class="button"
          :disabled="!goLeft"
          @click="scrollLeft">
            <img :src="leftGallery"  alt="стрелка" />
        </button>
        <button
          class="button"
          :disabled="!goRight"
          @click="scrollRight">
            <img :src="rightGallery"  alt="стрелка" />
        </button>
      </div>
    </div>

    <ul class="gallery">
      <li
        v-for="product in visibleProducts"
        :key="product.id"
        >
        <AppCard
          class="box-shadow"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :newPrice="product.newPrice"
          :oldPrice="product.oldPrice"
          :isSale="product.isSale"
          />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import leftGallery from '../../../assets/leftGallery.svg'
import rightGallery from '../../../assets/rightGallery.svg'
import { products } from '@/data/products';
import AppCard from '../AppCard.vue';
export default {
  components: {AppCard},
  setup(){
    const visible = 4
    const take_last = 10
    const recommended = computed(() => products.slice(-take_last))
    const startIndex = ref(0)
    const visibleProducts = computed(() => recommended.value.slice(startIndex.value, startIndex.value + visible))
    const maxIndex = computed(() => Math.max(0, recommended.value.length - visible))
    const goLeft = computed(() => startIndex.value > 0)
    const goRight = computed(() => startIndex.value < maxIndex.value)
    const scrollLeft  = () => { if (goLeft.value)  startIndex.value -= 1 }
    const scrollRight = () => { if (goRight.value) startIndex.value += 1 }

    return {
      leftGallery,
      rightGallery,
      visibleProducts,
      goLeft,
      goRight,
      scrollLeft,
      scrollRight,
    }
  }
}
</script>

<style scoped>
.container {
  background-color: var(--five-back);
  margin: 60px 0 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.text {
  padding: 10px 0 65px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.container-button {
  display: flex;
  gap: 7px;
}

.button {
  border: 1px solid var(--six-color);
  width: 45px;
  height: 45px;
  border-radius: 5%;
}

.button:hover {
  border: 1px solid var(--accent-color);
}

.button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: var(--six-color);
}

.gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.box-shadow {
  box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.25);
}
</style>