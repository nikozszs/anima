<template>
  <div class='container'>
    <div class="decoration decoration-left"></div>
    <h2 class="title-other-color">Изделия из натурального камня</h2>
    <ListCategory />
    <div>
      
    </div>
  </div>
</template>

<script lang="ts">
import ListCategory from '../components/ui/ListCategory.vue';
import {} from 'vue'
export default {
  components: {ListCategory},
  setup(){
  }
}
</script>

<style scoped>
.container {
  background: var(--fourt-back);
  padding: 54px 99px 60px;
}

h2 {
  margin: 10px 0 19px;
}
</style>