<template>
  <div class="container-watch-button">
    <router-link
      class="watch-button"
      :to=route>
        смотреть все
    </router-link>

    <img
      src="../../assets/arrowRight.png"
      alt="стрелка вправо"
      class="arrowRight">
  </div>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = props.path
    return {route}
  }
}
</script>

<style scoped>
.container-watch-button {
  display: flex;
  flex-direction: row;
  gap: 13px;
  justify-content: end;
}

.arrowRight {
  width: 25px;
}

.watch-button {
  font-size: 1.313rem;
  color: var(--third-color);
  text-decoration: none;
}

.watch-button:hover {
  color: var(--accent-color);
}
</style>