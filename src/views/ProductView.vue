<template>
  <div class="container" v-if="product">
    <ListCategory :lastItem="product.title" class="listCategory"/>
    <div class="containerTitle border-bottom">
      <h2 class="title">{{ product.title }}</h2>
      <div>
        <h5 class="accent-color fw500">Модель: <span class="text-noaccent">{{ product.model }}</span></h5>
        <h5 class="accent-color fw500">Артикул: <span class="text-noaccent">{{ product.article }}</span></h5>
      </div>
    </div>
    <div class="container-grid">
      <div class="container-image">
        <img
          class="card-img"
          :src="product.image"
          :alt="product.characteristics.product"
          >
      </div>
      <div class="container-description">
        <div class="container-inStock">
          <img src="../assets/inStock.svg" alt="в наличии">
          <h4 class="accent-color fw600">В наличии</h4>
        </div>
        <div class="container-price">
          <div class="container-oldPrice">
            <span class="newPrice fw600">
              {{ currency(product.newPrice) }}
            </span>
            <span class="oldPrice" v-if="product.oldPrice !== undefined && product.oldPrice !== null">
              {{ currency(product.oldPrice) }}
            </span>
          </div>
          <div class="block"
            v-if="product.percentSale">
            <h5 class="fw700">-{{ product.percentSale }}%</h5>
          </div>
        </div>
        <p class="subtitleNDS fw500">{{ product.subtitleNDS }}</p>
        <div class="container-amount" v-if="product.amount > 0">
          <p class="label">Количество:</p>
          <div class="container-arrows">
            <input
              type="text"
              class="input"
              v-model.number="quantity"
              id="amount"
              readonly>
            <div class="container-arrow-buttons">
              <button
                class="button-arrow"
                @click="quantity < product.amount ? quantity++ : null"
                :disabled="quantity >= product.amount"
                aria-label="увеличить количество"
              >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2V10M2 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              </button>

              <button
                class="button-arrow"
                @click="quantity > 1 ? quantity-- : null"
                :disabled="quantity <= 1"
                aria-label="уменьшить количество"
                >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="table">
          <div class="container-with-button">
            <p class="label">Характеристики</p>
            <ArrowAccentColor v-model="isOpenCharacteristics"/>
          </div>
          <table v-if="isOpenCharacteristics"
              id="characteristics-table"
              class="characteristics-table">
              <tbody>
                <tr>
                  <td class="cell-key">Вид камня</td>
                  <td class="cell-value">{{ product.characteristics.typeOfStone }}</td>
                </tr>
                <tr>
                  <td class="cell-key">Изделие</td>
                  <td class="cell-value">{{ product.characteristics.product }}</td>
                </tr>
                <tr>
                  <td class="cell-key">Месторождение</td>
                  <td class="cell-value">{{ product.characteristics.field }}</td>
                </tr>
                <tr>
                  <td class="cell-key">Цвет</td>
                  <td class="cell-value">{{ product.characteristics.color }}</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div class="container-connection">
          <AppButton text="Консультация бесплатно"
            color="primary"
            class="AppButton text-sm" />
          <AppButton text="Оставить заявку"
            color="submit"
            class="AppButton text-sm sm-button" />
        </div>
      </div>
    </div>

    <div class="block-description">
      <div class="block-description-flex">
        <p class="title-description fw600">Описание</p>
        <ArrowAccentColor v-model="isOpenDescription"/>
      </div>
      <div></div>
      <p v-if="isOpenDescription"
        class="text-desc">{{ product.description }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'
import ListCategory from '@/components/ui/ListCategory.vue';
import { products } from '@/data/products';
import { useRoute } from 'vue-router';
import { currency } from '@/utils/currency';
import AppButton from '../components/ui/AppButton.vue'
import ArrowAccentColor from '@/components/ui/ArrowAccentColor.vue';

export default {
  components: {ListCategory, AppButton, ArrowAccentColor},
  setup() {
    const route = useRoute()
    const product = computed(() => products.find(a => a.id === Number(route.params.id)))
    const quantity = ref(1)
    const isOpenCharacteristics = ref(false)
    const isOpenDescription = ref(false)

    watch(product, () => {
      quantity.value = 1
    })

    return {product, currency, quantity, isOpenCharacteristics, isOpenDescription}
  }
}
</script>

<style scoped>
.container {
  padding: 24px 100px 63px
}

.title {
  color: var(--third-color);
  line-height: 130%;
}

.listCategory {
  margin: 0
}

.containerTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 17px 0;
}

.text-noaccent {
  color: var(--sec-color)
}

.container-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  margin: 30px 0 75px;
}

.container-image {
  display: flex;
  gap: 23px;
}

.container-inStock {
  display: flex;
  gap: 8px;
  flex-direction: row;
  margin-bottom: 36px;
}

.container-price {
  display: flex;
  gap: 40px;
}

.newPrice {
  font-size: 2.25rem;
  color: var(--fourt-color);
}

.oldPrice {
  color: var(--sec-color);
  text-decoration: line-through;
  font-size: 1.538rem;
}

.container-oldPrice {
  display: flex;
  gap: 14px;
}

.block {
  background-color: var(--accent-color);
  padding: 8px 17px;
}

.subtitleNDS {
  color: var(--sec-color);
  font-size: 0.75rem;
  margin: 7px 0 35px;
}

.container-amount {
  display: flex;
  gap: 23px;
  align-items: center;
  margin-bottom: 31px;
}

.label {
  font-size: 1.063rem;
  color: var(--third-color);
}

.input {
  outline: none;
  color: var(--third-color);
  font-size: 1.313rem;
  width: 28px;
}

.input, .button-arrow {
  border: none;
  cursor: pointer;
}

.button-arrow {
  color: var(--fourt-color);
}

.button-arrow:disabled {
  color: var(--seven-color);
}

.button-arrow:hover {
  color: var(--seven-color);
}

.container-arrow-buttons {
  display: flex;
  flex-direction: column;
}

.container-arrows {
  border: 1px solid var(--seven-color);
  display: flex;
  flex-direction: row;
  padding: 4px 16px;
}

.container-with-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
}

.characteristics-table {
  margin: 14px 0 0;
  width: 100%;
}

.characteristics-table tr:nth-child(odd) {
  background-color: var(--fix-back);
}

td {
  color: var(--third-color);
  line-height: 47px;
}

.cell-key {
  width: 35%;
}

.container-connection {
  display: flex;
  gap: 35px;
  margin-right: 10%;
  margin-top: 25px;
}

.AppButton {
  border: 1px solid var(--seven-color);
}

.sm-button {
  width: 70%;
}

.title-description {
  font-size: 1.375rem;
  color: var(--fourt-color);
}

.block-description-flex {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.text-desc {
  line-height: 30px;
  color: var(--fourt-color);
}
</style>