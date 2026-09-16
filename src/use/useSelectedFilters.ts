import { ref, reactive, computed } from 'vue'
import { products } from '@/data/products'

export function useSelectedFilters() {
    const allProducts = ref(products)
    const selectedFilters = ref<Record<string, string[]>>({})

    const filterProducts = () => {
      if (Object.keys(selectedFilters.value).length === 0) {
        return allProducts.value
      }

      return allProducts.value.filter(product => {
        if (selectedFilters.value['Вид камня']?.length) {
          const typeMatch = selectedFilters.value['Вид камня'].some(
            type => product.characteristics.typeOfStone.toLowerCase() === type.toLowerCase()
          )
          if (!typeMatch) return false
        }

        if (selectedFilters.value['Изделие']?.length) {
          const productMatch = selectedFilters.value['Изделие'].some(
            productType => product.characteristics.product.toLowerCase() === productType.toLowerCase()
          )
          if (!productMatch) return false
        }

        if (selectedFilters.value['Месторождение']?.length) {
          const fieldMatch = selectedFilters.value['Месторождение'].some(
            field => product.characteristics.field.toLowerCase() === field.toLowerCase()
          )
          if (!fieldMatch) return false
        }

        if (selectedFilters.value['Цвет']?.length) {
          const colors = product.characteristics.color
            .toLowerCase()
            .split(', ')
            .map(c => c.trim())
          const colorMatch = selectedFilters.value['Цвет'].some(
            color => colors.includes(color.toLowerCase())
          )
          if (!colorMatch) return false
        }
        return true
      })
    }

    const filteredProducts = computed(() => {return filterProducts()})

    return {
      filteredProducts,
      selectedFilters
    }
}