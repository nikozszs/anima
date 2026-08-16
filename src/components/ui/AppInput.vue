<template>
  <input
    :type="type"
    class="input"
    :value="modelValue"
    @input="$emit('upd:modelValue', ($event.target as HTMLInputElement).value)"
    :placeholder="placeholder" />
</template>

<script lang="ts">
// import {} from 'vue'
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value: string) {
        return ['text', 'tel'].includes(value)
      }
    },
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    }
  },
  emits: ['upd:modelValue']
}
</script>

<style scoped>
.input {
  border: 1px solid var(--sec-color);
  background: transparent;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 135%;
  color: var(--sec-color);
  padding: 15px 0 17px 20px;
}
</style>