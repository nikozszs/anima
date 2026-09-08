<template>
  <div class="container-cardSales">
    <div class="image-wrapper">
      <div class="icon-sale" v-if="isSale"></div>
      <img class="cardSales-img" :src="image" :alt="title"/>
    </div>
    <p class="cardSales-title">{{ title }}</p>
    <h5 class="cardSales-subtitle">{{ subtitle }}</h5>
    <div class="block-price">
      <p class="newPrice">{{ currency(newPrice) }}</p>
      <p class="oldPrice"
        v-if="oldPrice !== undefined && oldPrice !== null">
        {{ currency(oldPrice) }}
      </p>
    </div>
    <AppButton class="button button-sale" text="Подробнее" color="primary" />
  </div>
</template>

<script lang="ts">
import { currency } from '../../utils/currency.ts';
import AppButton from './AppButton.vue';
export default {
  props: {
    isSale: {
      default: false,
      type: Boolean,
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    newPrice: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number,
      required: false,
      default: null
    }
  },
  components: {AppButton},
  setup(){
    return {currency}
  }
}
</script>

<style scoped>
.container-cardSales {
  border: 1px solid var(--fourt-back);
  padding: 14px 18px 15px;
  background: var(--fourt-back);
  max-width: 285px;
  width: 100%;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 26px;
}

.button-sale {
  padding: 12px 77px;
}

.icon-sale::after {
  content: 'Акция';
  position: absolute;
  text-align: center;
  color: var(--fourt-color);
  background: rgba(255, 255, 255, 0.45);
  width: 86px;
  font-weight: 500;
  font-size: 1.063rem;
  top: 0;
  right: 0;
  padding: 7px;
}

.cardSales-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cardSales-title {
  font-size: 0.875rem;
  line-height: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

.cardSales-title, .cardSales-subtitle {
  color: var(--accent-color);
}

.cardSales-subtitle {
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  text-transform: none;
}

.block-price {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
}

.newPrice {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--accent-color)
}

.oldPrice {
  font-size: 0.875rem;
  color: var(--five-color);
  text-decoration: line-through;
}

.button {
  text-transform: none;
  font-weight: 400;
}
</style>