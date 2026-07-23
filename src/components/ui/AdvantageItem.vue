<template>
  <div>
    <p class="list-container-title" :class="titleClass">
      {{ item.title }}
    </p>
    <div class="arrow-block" :class="positionClass">
      <img class="arrow" src="../../assets/arrow.svg" alt="стрелка">
      <div class="number-container">
        <div class="decoration-line"></div>
        <span class="block-number">
          {{ item.number }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    align: {
      type: String,
      default: 'left',
      validator(value: string) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  setup(props){
    const positionClass = `arrow-block-${props.align}`
    const titleClass = props.align === 'right' ? 'list-container-title-right' : ''
    return {positionClass, titleClass}
  }
}
</script>

<style scoped>
.list-container-title {
  color: var(--third-color);
  font-weight: 600;
  font-size: 1.25rem;
  list-style: none;
  line-height: 1em;
  white-space: pre-line;
}

.list-container-title-right {
  text-align: right;
}

.arrow-block {
  display: flex;
  gap: 15px;
  align-items: center;
}

.arrow-block-left {
  flex-direction: row;
}

.arrow-block-right {
  flex-direction: row-reverse;
}

.arrow-block-right .number-container {
  flex: 1;
  flex-direction: row-reverse;
}

.number-container {
  display: flex;
  align-items: center;
}

.decoration-line {
  background: var(--accent-color);
  width: 320px;
  height: 1px;
  margin-bottom: 11px;
  margin-top: 7px;
}

.block-number {
  background: var(--accent-color);
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1.25rem;
}

.arrow {
  width: 13px;
  height: 15px;
}
</style>