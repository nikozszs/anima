<template>
  <section class="container">
    <div class="relations">
      <div class="relations-flexcontainer">
        <p class="subtitle">камень с душой </p>
        <div class="relations-line"></div>
      </div>
      <h1 class="title">Каменные изделия <span class="title-other-color">для вашего дома</span></h1>
      <div class="button-block">
        <AppButton text="рассчитать стоимость" color="primary"/>
        <AppButton text="Связаться с нами" color="secondary"/>
      </div>
    </div>

    <div class="reference">
      <img class="reference-img" src="../../assets/image.svg" alt="референс">
      <div class="reference-line"></div>
    </div>
  </section>
</template>

<script lang="ts">
import {} from 'vue'
import AppButton from './AppButton.vue';
export default {
  components:{AppButton},
  setup(){}
}

</script>

<style scoped>
.container {
  padding: 13px 0 33px;
  position: relative;
}

.title {
  padding: 9px 0 25px;
}

.relations {
  margin-top: 101px;
  position: relative;
  padding: 67px 43px 58px 102px;
  background: var(--third-back);
  width: 743px;
  z-index: 1;
  box-shadow: -20px 0px 20px 15px rgba(125, 136, 131, 0.3);
}

.relations-flexcontainer {
  display: flex;
  justify-content: left;
  gap: 11px;
}

.relations-line {
  margin-top: 5px;
  background: var(--sec-color);
  width: 82px;
  height: 1px;
}

.subtitle {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--sec-color);
  text-transform: uppercase;
}

.title-other-color {
  color: var(--accent-color)
}

.button-block {
  display: flex;
  gap: 23px;
}

.reference {
  position: absolute;
  top: -10px;
  right: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.reference-img {
  position: relative;
  z-index: 0;
  max-width: 100%;
  height: auto;
  display: block;
}

.reference-line {
  position: absolute;
  top: 40px;
  z-index: -1;
  height: 585px;
  width: 1005px;
  border: 3px solid var(--accent-color);
  box-shadow: -20px 0px 8px 7px #000;
  background: #00000000;
}
</style>