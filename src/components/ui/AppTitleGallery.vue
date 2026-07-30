<template>
  <div class="container-titleGallery" :class="[alignClass]">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    align: {
      type: String,
      required: true,
      default: 'left',
      validator(value: string) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  setup(props) {
    const alignClass = `align-${props.align}`
    return {alignClass}
  }
}
</script>

<style scoped>
.title {
  font-size: 1.5rem;
  line-height: 150%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--first-color);
  text-align: center;
  padding: 11px 0;
}

.align-left {
  left: 0;
}

.align-right {
  right: 0;
}

.container-titleGallery {
  width: 400px;
  background: linear-gradient(to bottom, var(--third-back) 10%, transparent 140%);
}
</style>