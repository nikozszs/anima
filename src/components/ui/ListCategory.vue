<template>
  <div class="container-list border-bottom">
    <div>
      <ul class="navigation">
        <li v-for="(item, index) in navigation"
          :key="item.name"
          >
          <router-link
            v-if="!item.active"
            class="nav-link text-base"
            :to="item.route"
            >
            {{ item.name }}
          </router-link>
          <span
            v-else
            class="nav-link text-base active"
            >
            {{ item.name }}
          </span>
          <img
            v-if="index < navigation.length - 1"
            src="../../assets/arrowNavigation.svg"
            alt="стрелка"
            class="arrow"
            />
        </li>
      </ul>
    </div>
    <div v-if="showBlock" class="category">
      <span class="nav-link text-base">Сортировать:</span>
      <select
        class="select"
        @change="onChange"
        >
        <option
          v-for="option in defaultSortOptions"
          :key="option.value"
          :value="option.value">
            {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useBreadcrumbs } from '../../use/useBreadcrumbs';
import {defaultSortOptions} from '../../use/useSorting';

export default {
  props: {
    lastItem: {
      type: String,
      default: null,
      required: false
    }
  },
  emits: ['sort-change'],
  setup(props, {emit}){
    const { listNavigation, showBlock } = useBreadcrumbs()

    const navigation = computed(() => {
      if (!props.lastItem) return listNavigation.value

      return [
        ...listNavigation.value,
        {name: props.lastItem, active: true, route: ''}
      ]
    })

    const onChange = (e: Event) => {
      const value = (e.target as HTMLSelectElement).value
      emit('sort-change', value)
    }

    return {
      navigation,
      showBlock,
      defaultSortOptions,
      onChange
    }
  }
}
</script>

<style scoped>
.container-list {
  border-top: 1px solid var(--six-color);
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 51px;
}

.navigation {
  display: flex;
  flex-direction: row;
  padding: 0;
}

.nav-link {
  color: var(--sec-color);
  text-decoration: none;
  text-transform: capitalize;
}

.active {
  color: var(--accent-color);
}

.arrow {
  padding: 0 6px;
}

.select {
  color: var(--accent-color);
  border: none;
  text-transform: lowercase;
  padding-left: 5px;
  font-size: 17px;
  outline: none;
}
</style>