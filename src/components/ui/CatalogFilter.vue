<template>
  <div class="container-filter">
    <div
      v-for="(filter, index) in filters"
      :key="index"
      >
      <div class="container-type"
        :class="{active: activeFilter === index}"
        @click="toggleFilter(index)"
        >
          <p class="text-type">{{ filter.name }}</p>
          <img src="../../assets/accordionArrow.svg"
            alt="стрелка"
            class="arrow"
            >
      </div>

      <div class="filter-content"
        :class="{open: activeFilter === index}"
        >
        <div v-for="(option, optionIndex) in filter.options"
          :key="optionIndex"
          class="filter-option"
          :class="{selected: option.selected}"
          @click="selectOption(index, optionIndex)"
          >
          {{ option.name }}
        </div>
      </div>

      <div
        v-if="index < filters.length - 1"
        class="line"
      ></div>
    </div>
    <AppButton text="Очистить" color="submit"
      class="button"
      @click="handleReset" />
  </div>
</template>

<script lang="ts">
import {watch} from 'vue'
import AppButton from '../ui/AppButton.vue'
import { useFilters } from '../../use/useFilters.ts'

export default {
  components: { AppButton },
  emits: ['filter-change'],
  setup(props, {emit}) {
    const {
      filters,
      toggleFilter,
      activeFilter,
      selectOption,
      resetFilters,
      getSelectedFilters
    } = useFilters([
      {
        name: "Вид камня",
        options: [
          {name: "Гранит", selected: false},
          {name: "Мрамор", selected: false},
          {name: "Дикий камень", selected: false},
        ]
      },
      { name: "Изделие",
        options: [
          {name: "Столешницы", selected: false},
          {name: "Камины", selected: false},
          {name: "Панно", selected: false},
          {name: "Подставка", selected: false},
          {name: "Декор", selected: false},
          {name: "Кухня", selected: false},
          {name: "Ваза", selected: false},
          {name: "Комод", selected: false},
        ]
      },
      {
          name: 'Месторождение',
          options: [
            { name: 'Италия', selected: false },
            { name: 'Греция', selected: false },
            { name: 'Турция', selected: false },
            { name: 'Бразилия', selected: false }
          ]
        },
        {
          name: 'Цвет',
          options: [
            { name: 'Белый', selected: false },
            { name: 'Коричневый', selected: false },
            { name: 'Бежевый', selected: false },
            { name: 'Серый', selected: false }
          ]
        }])

    watch(filters, () => {
      const selected = getSelectedFilters()
      emit('filter-change', selected)
    }, {deep: true})

    const handleReset = () => {
      resetFilters()
      emit('filter-change', {})
      activeFilter.value = null
    }

    return {
      handleReset,
      filters,
      toggleFilter,
      activeFilter,
      selectOption,
      resetFilters,
      getSelectedFilters
    }
  }
}
</script>

<style scoped>
.container-filter {
  background: var(--fix-back);
  padding: 18px 14px;
  width: 288px;
}

.container-type {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
}

.container-type:hover .text-type,
.container-type.active .text-type {
  color: var(--accent-color);
}

.container-type:hover .arrow,
.container-type.active .arrow {
  filter: brightness(0) saturate(100%) invert(20%) sepia(63%) saturate(1076%) hue-rotate(113deg) brightness(97%) contrast(101%);
}

.button {
  padding: 15px 10px;
}

.container-type.active img {
  transform: rotate(90deg);
}

.text-type {
  color: var(--seven-color);
  font-weight: 500;
  font-size: 1rem;
  line-height: 55px;
  letter-spacing: 0;
  transition: color 0.2s ease;
  cursor: pointer;
}

.filter-option {
  color: var(--seven-color);
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 40px;
  padding: 0 8px;
  border-radius: 4px;
  transition: color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
}

.line {
  border-top: 1px solid var(--six-color);
}

.filter-content {
  padding-left: 7px;
  max-height: 0;
  transition: max-height 0.3s ease, padding 0.3s ease;
  overflow: hidden;
}

.filter-content.open {
  padding-left: 7px;
  max-height: 456px;
}

.filter-option:hover {
  color: var(--accent-color);
  background-color: rgba(0, 0, 0, 0.05);
}

.filter-option.selected {
  color: var(--accent-color);
}
</style>