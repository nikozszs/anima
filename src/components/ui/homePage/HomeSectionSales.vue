<template>
  <section class="container-section-sales">
    <AppWatchButton path="/sales" color="white" />
    <div class="container-current-sales">
      <div class="container-current-sales-first">
        <div class="container-title">
          <div class="decoration decoration-left other-color-decoration"></div>
          <h2 class="title">
            Актуальные акции <br /> на <span class="title-other-color">нашу продукцию</span>
          </h2>
          <p class="subtitle">Учитывая ключевые сценарии поведения, обучения кадров влечет за собой процесс внедрения и
            модернизации распределения</p>
          <AppButton class="button" text="перейти в  каталог" color="primary" />
        </div>
        <div class="line"></div>
      </div>
      <div class="container-current-sales-second">
        <AppCard :id="item.id" v-for="item in salesItems" :key="item.id" :image="item.image" :new-price="item.newPrice"
          :old-price="item.oldPrice ?? undefined" :is-sale="item.isSale" :title="item.title" :subtitle="item.subtitle"
          />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppWatchButton from '../AppWatchButton.vue';
import { salesItems } from '../../../data/sales.ts'
import AppCard from '../AppCard.vue';
import AppButton from '../AppButton.vue';
export default {
  components: { AppWatchButton, AppCard, AppButton },
  setup() {
    return { salesItems }
  }
}
</script>

<style scoped>
.container-section-sales {
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.8) 30%, transparent 100%),
    url('../../../assets/backgroundSales.jpg');
  background-size: cover;
  padding: 57px 80px 100px 0;
}

.container-current-sales {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
}

.container-current-sales-second {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 28px;
  padding-top: 26px;
}

.container-current-sales-first {
  display: flex;
  align-items: center;
}

.container-title {
  padding: 41px 58px 51px 90px;
  z-index: 1;
  position: relative;
  background: linear-gradient(to bottom, var(--third-back) 10%, transparent 140%);
}

.title {
  padding: 10px 0 34px;
}

.subtitle {
  font-size: 1.375rem;
  padding-bottom: 41px;
  font-weight: 300;
}

.button {
  width: 50%
}

.line {
  position: absolute;
  border: 2px solid var(--accent-color);
  z-index: 0;
  box-shadow: none;
  width: 600px;
  height: 480px;
}
</style>
