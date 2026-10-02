<template>
  <button @click="toggle"
    class="button"
    >
      <img src="../../assets/arrowTable.svg"
      alt="стрелка"
      :class="{ rotated: modelValue }"
      >
    </button>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}){
    const toggle = () => emit('update:modelValue', !props.modelValue)
    return {toggle}
  }
}
</script>

<style scoped>
.button  {
  border: none;
  cursor: pointer;
}

.button img.rotated {
  transform: rotate(180deg);
}
</style>