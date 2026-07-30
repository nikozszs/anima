<template>
  <div class="container-watch-button">
    <router-link
      class="watch-button"
      :to=route
      :class="[colorClass]">
        смотреть все
    </router-link>

    <img
      src="../../assets/arrowRight.png"
      alt="стрелка вправо"
      class="arrowRight"
      :class="[colorClass]"
      >
  </div>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'dark',
      validator(value: string) {
        return ['dark', 'white'].includes(value)
      }
    }
  },
  setup(props) {
    const route = props.path
    const colorClass = `color-${props.color}`
    return {route, colorClass}
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
  width: 23px;
}

.color-dark {
  color: var(--third-color);
}

.color-white {
  color: var(--first-color);
}

.color-white.arrowRight {
  filter: brightness(0) invert(1);
}

.color-dark.arrowRight {
  filter: none;
}

.watch-button {
  font-size: 1.313rem;
  text-decoration: none;
  text-transform: uppercase;
}

.watch-button:hover {
  color: var(--accent-color);
}
</style>
