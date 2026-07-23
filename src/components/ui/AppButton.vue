<template>
  <button class="button" :class="variantClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'primary',
      validator(value: string) {
        return ['primary', 'secondary', 'submit' ].includes(value)
      }
    }
  },
  setup(props){
    const variantClass = `button-${props.color}`
    return {variantClass}
  }
}
</script>

<style scoped>
.button {
  padding: 26px 41px 23px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  color: var(--first-color);
  font-weight: 300;
}

.button-primary {
  background: var(--accent-color);
}

.button-primary:hover {
  background: #359268
}

.button-secondary {
  background: var(--sec-back);
}

.button-secondary:hover {
  background: #5a6268;
}

.button-submit {
  background: var(--fourt-back);
  color: var(--fourt-color);
  font-weight: 700;
  font-size: 0.938rem;
}

.button-submit:hover {
  background: #1e7e34
}
</style>