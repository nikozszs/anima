<template>
  <input
    :type="type"
    class="input"
    :value="modelValue"
    @input="handleInput"
    @blur="handleBlur"
    :placeholder="placeholder"
    :class="{ 'error': error }" />
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'blur'],
  methods: {
    handleInput(e: Event) {
      const target = e.target as HTMLInputElement
      const value: string | number = this.type === 'number'
        ? Number(target.value)
        : target.value
      this.$emit('update:modelValue', value)
    },
    handleBlur(e: FocusEvent) {
      this.$emit('blur', e)
    }
  }
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

.input:focus {
  outline: 1px solid var(--first-color);
  border-radius: 3px;
}

.input-error, .input-error:focus {
  border-color: #ff4444;
}
</style>