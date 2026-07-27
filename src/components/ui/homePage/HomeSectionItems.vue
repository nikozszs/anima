<template>
  <div class="container">
    <div class="decoration decoration-left"></div>
    <h2 class="container-title">Изделия <span class="title-other-color"><br> из натурального камня</span> </h2>

    <AppWatchButton path="/catalog"/>

    <div class="gallery">
      <div v-for="item in galleryItems"
        :key="item.id"
        :class="item.class"
        class="gallery-item"
        >
        <img :src="item.src" :alt="item.alt">
        <AppTitleGallery :title="item.title" :align="item.align"
          class="gallery-title"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import tabletopImg from '@/assets/tabletop.jpg'
import windowSillsImg from '@/assets/windowSills.jpg'
import sinkImg from '@/assets/sink.jpg'
import panelImg from '@/assets/panel.jpg'
import AppWatchButton from '../AppWatchButton.vue';
import AppTitleGallery from '../AppTitleGallery.vue';
export default {
  components: {AppWatchButton, AppTitleGallery},
  setup(){
    const galleryItems = [
      { id: 1,
        src: tabletopImg,
        alt: "столешница",
        title: "столешница",
        class: "tabletop",
        align: 'left'
      },
      { id: 2,
        src: windowSillsImg,
        alt: "подоконники",
        title: "подоконники",
        class: "windowSills",
        align: 'right'
      },
      { id: 3,
        src: sinkImg,
        alt: "раковины",
        title: "раковины",
        class: "sink",
        align: 'left'
      },
      { id: 4,
        src: panelImg,
        alt: "панно",
        title: "панно",
        class: "panel",
        align: 'right'
      },
    ]

    return {galleryItems}
  }
}
</script>

<style scoped>
.container {
  padding: 60px 97px 112px;
}

.container-title {
  padding: 15px 0 59px ;
  color: var(--third-color);
}

.gallery-title {
  position: absolute;
  z-index: 2;
  bottom: 20px;
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
  box-shadow: 0 4px 47px 15px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.189);
}

.gallery-item {
  position: relative;
}

.gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
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