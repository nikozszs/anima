<template>
  <div class="container-list">
    <div>
      <ul class="navigation">
        <li v-for="(item, index) in listNavigation"
          :key="item.name"
          >
          <router-link
            v-if="!item.active"
            class="nav-link"
            :to="item.route"
            >
            {{ item.name }}
          </router-link>
          <span
            v-else
            class="nav-link active"
            >
            {{ item.name }}
          </span>
          <img
            v-if="!item.active && index < listNavigation.length - 1"
            src="../../assets/arrowNavigation.svg"
            alt="стрелка"
            class="arrow"
            />
        </li>
      </ul>
    </div>
    <div v-if="showBlock" class="category">
      <span class="nav-link">Сортировать:</span>
      <select
        v-model="select"
        class="select"
        @change="handleSortChange"
        >
        <option
          v-for="option in sortOptions"
          :key="option.value"
          :value="option.value">
            {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { useNavCategory } from '../../use/useNavCategory';

export default {
  setup(){
    const {
      listNavigation,
      showBlock,
      select,
      sortOptions,
      handleSortChange
    } = useNavCategory()

    return {
      listNavigation,
      showBlock,
      select,
      sortOptions,
      handleSortChange
    }
  }
}
</script>

<style scoped>
.container-list {
  border-top: 1px solid var(--six-color);
  border-bottom: 1px solid var(--six-color);
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
}

.navigation {
  display: flex;
  flex-direction: row;
  padding: 0;
}

.nav-link {
  font-size: 1rem;
  font-weight: 400;
  color: var(--sec-color);
  text-transform: none;
  text-decoration: none;
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
  list-style: none;
  text-transform: lowercase;
  padding-left: 5px;
  font-size: 17px;
  outline: none;
}
</style>