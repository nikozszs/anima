<template>
  <section class="container">
    <div class="decoration decoration-left"></div>
    <h2 class="title"> Идеи для <span class="title-other-color"> <br />вдохновения</span></h2>
    <div class="gallery">
      <img  v-for="item in ideas"
        :key="item.id"
        :src="item.src"
        :class="`idea${item.id}`"
        />
    </div>
    <div class="button-container">
      <AppButton
        text="Смотреть еще больше фотографий"
        color="primary"
        class="button">
      </AppButton>
    </div>
  </section>
</template>

<script lang="ts">
import idea1 from '@/assets/idea1.jpg'
import idea2 from '@/assets/idea2.jpg'
import idea3 from '@/assets/idea3.jpeg'
import idea4 from '@/assets/idea4.jpg'
import idea5 from '@/assets/idea5.jpg'
import AppButton from '../AppButton.vue';
import {} from 'vue'
export default {
  components: {AppButton},
  setup(){
    const ideas = [
      {src: idea1, id: 1},
      {src: idea2, id: 2},
      {src: idea3, id: 3},
      {src: idea4, id: 4},
      {src: idea5, id: 5},
    ]
    return {ideas}
  }
}
</script>

<style scoped>
.container {
  padding: 60px 100px 100px;
}

.title {
  color: var(--third-color);
  padding: 9px 0 60px;
}

.gallery {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 20px;
  box-shadow: 0 4px 47px 15px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.119);
  margin-bottom: 67px;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}

.idea1 {
  grid-column: 1/2;
  grid-row: 1/3;
}

.idea2 {
  grid-column: 2/3;
  grid-row: 1/2;
}

.idea3 {
  grid-column: 3/4;
  grid-row: 1/2;
}

.idea4 {
  grid-column: 2/3;
  grid-row: 2/3;
}

.idea5 {
  grid-column: 3/4;
  grid-row: 2/3;
}

.button-container {
  display: flex;
  justify-content: end;
}

.button {
  width: 34%;
  text-transform: none;
  box-shadow: 0 4px 47px 15px rgba(0, 0, 0, 0.25);
}
</style>