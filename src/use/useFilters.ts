import { ref, reactive, computed } from 'vue'

export interface FilterOption {
  name: string
  selected: boolean
}

export interface Filter {
  name: string
  options: FilterOption[]
}

export function useFilters(initialFilters: Filter[]) {
  const filters = reactive<Filter[]>(initialFilters)
  const activeFilter = ref<number | null>(null)

  const toggleFilter = (index: number) => {
    activeFilter.value = activeFilter.value === index ? null : index
  }

  const selectOption = (filterIndex: number, optionIndex: number) => {
    const filter = filters[filterIndex]
      if (!filter) return
      const option = filter.options[optionIndex]
      if (!option) return
      option.selected = !option.selected
  }

  const getSelectedFilters = () => {
    const result: Record<string, string[]> = {}
    filters.forEach(filter => {
      const selected = filter.options
        .filter(opt => opt.selected)
        .map(opt => opt.name)
      if (selected.length > 0) {
        result[filter.name] = selected
      }
    })
    return result
  }

  const resetFilters = () => {
    filters.forEach(filter => {
      filter.options.forEach(opt => {
        opt.selected = false
      })
    })
  }

  return {
    filters,
    activeFilter,
    toggleFilter,
    selectOption,
    getSelectedFilters,
    resetFilters
  }
}