<template>
  <div class="container-card" @click="openCard">
    <div class="image-wrapper">
      <div class="icon" v-if="isSale"></div>
      <img class="card-img" :src="image" :alt="title"/>
    </div>
    <p class="card-title text-sm fw700">{{ title }}</p>
    <h5 class="card-subtitle">{{ subtitle }}</h5>
    <div class="block-price">
      <p class="newPrice text-xl fw700">{{ currency(newPrice) }}</p>
      <p class="oldPrice text-sm"
        v-if="oldPrice !== undefined && oldPrice !== null">
        {{ currency(oldPrice) }}
      </p>
    </div>
    <AppButton
      class="button fw400"
      text="Подробнее"
      color="primary"
      />
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
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
      required: false
    },
    newPrice: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number,
      required: false,
      default: null
    },
    id: {
      type: Number,
      required: true,
    }
  },
  components: {AppButton},
  setup(props){
    const router = useRouter()
    const openCard = () => {
      router.push({name: 'product', params: {id: props.id}})
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    }
    return {currency, openCard}
  }
}
</script>

<style scoped>
.container-card {
  border: 1px solid var(--fourt-back);
  padding: 14px 18px 15px;
  background: var(--fourt-back);
  max-width: 285px;
  min-height: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.3);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 26px;
}

.button {
  padding: 12px 77px;
  margin-top: auto;
}

.icon::after {
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

.card-title {
  line-height: 22px;
  margin-bottom: 4px;
}

.card-title, .card-subtitle {
  color: var(--accent-color);
}

.card-subtitle {
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
  color: var(--accent-color)
}

.oldPrice {
  color: var(--five-color);
  text-decoration: line-through;
}
</style>