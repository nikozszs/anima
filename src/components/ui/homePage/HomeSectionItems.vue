<template>
  <div class="container">
    <div class="decoration decoration-left"></div>
    <h2 class="container-title">Изделия <span class="title-other-color"><br> из натурального камня</span> </h2>

    <AppWatchButton path="/catalog"/>

    <div class="gallery">
      <img
        src="../../../assets/tabletop.jpg"
        alt="столешница"
        class="tabletop">
      <img
        src="../../../assets/windowSills.jpg"
        alt="подоконники"
        class="windowSills">
      <img
        src="../../../assets/sink.jpg"
        alt="раковины"
        class="sink">
      <img
        src="../../../assets/panel.jpg"
        alt="панно"
        class="panel">
    </div>

  </div>
</template>

<script lang="ts">
import {} from 'vue'
import AppWatchButton from '../AppWatchButton.vue';
export default {
  components: {AppWatchButton},
  setup(){}
}
</script>

<style scoped>
.container {
  padding: 60px 97px 112px;
  background: var(--fourt-back);
}

.container-title {
  padding: 15px 0 59px ;
  color: var(--third-color);
}

.decoration-left {
  margin: 0
}

.gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 340px 340px;
  gap: 10px;
  margin-top: 41px;
}

.gallery img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tabletop {
  grid-column: 1/3;
  grid-row: 1/2;
}

.windowSills {
  grid-column: 3/6;
  grid-row: 1/2;
}

.sink {
  grid-column: 1/4;
  grid-row: 2/3;
}

.panel {
  grid-column: 4/6;
  grid-row: 2/3;
}
</style>