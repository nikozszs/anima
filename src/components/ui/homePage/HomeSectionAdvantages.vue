<template>
  <section class="container">
    <div class="decoration"></div>
    <h2 class="title">наши преимущества - <p class="title-other-color">ваш результат</p></h2>

    <div class="grid-section">
      <div class="grid-col">
        <ul class="list-container">
          <li
            class="list-container-item"
            v-for="item in firstAdvantages"
            :key="item.number">
            <AdvantageItem :item="item" align="left"/>
          </li>
        </ul>
      </div>

      <div class="grid-col grid-img"></div>

      <div class="grid-col">
        <ul class="list-container">
          <li
            class="list-container-item"
            v-for="item in secondaryAdvantages"
            :key="item.number">
            <AdvantageItem :item="item" align="right"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {} from 'vue'
import AdvantageItem from '../AdvantageItem.vue';
export default {
  components: {AdvantageItem},
  setup(){
  const firstAdvantages = [
    {title: 'Новейшее итальянское оборудование Donatoni', number: '01', text: 'С его помощью мы производим необычные формы, изготавливаем сложные нестандартные изделия'},
    {title: 'Собственное \n произодство', number: '02', text: 'Предлагаем адекватную стоимость, поскольку производим все самостоятельно. Вы можете посетить наше производство, чтобы убедиться в этом'},
    {title: 'Широкий \n ассортимент', number: '03', text: 'Мы предлагаем изделия из более 120 месторождений из Италии, Испании, Индии, Бразилии, Китая, Ирана и др. Но если вам нужно что-то совершенно уникальное - закажем для вас любой камень.'}
  ]

  const secondaryAdvantages = [
    {title: 'Изделия \n из наличия', number: '04'},
    {title: 'Работаем под \n ключ', number: '05'},
    {title: 'Консультации по уходу \n за изделием из камня', number: '06'}
  ]

  return {firstAdvantages, secondaryAdvantages}
}
}
</script>

<style scoped>
.container {
  padding: 61px 70px 65px;
  background: var(--fourt-back);
}

.title {
  color: var(--third-color);
  text-align: center;
  line-height: 1.3em;
}

.grid-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-col {
  display: flex;
  flex-direction: column;
}

.list-container {
  padding: 80px 5px;
}

.grid-img {
  background: url('../../../assets/gridsecondsection.avif') center/cover no-repeat;
  max-height: 587px;
}

.list-container-item {
  margin-bottom: 64px;
  list-style: none;
}
</style>