<template>
  <div class="container">
    <p class="title">404</p>
    <p class="subtitle text-upper">Страница не найдена</p>
    <AppButton text="на главную"
      color="primary"
      class="button text-upper"
      ></AppButton>
  </div>
</template>

<script lang="ts">
import {} from 'vue'
import AppButton from '../components/ui/AppButton.vue'
export default {
    components: { AppButton },
    setup(){
    }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 116px;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 60px;
}

.title {
  font-size: 17.688rem;
  color: var(--accent-color);
}

.subtitle {
  font-size: 3.75rem;
  color: var(--fourt-color);
}

.button {
  width: 19%;
  font-size: 1.188rem;
}
</style>