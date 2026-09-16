import type { ProductItem } from '@/data/products'
import {computed, type Ref } from 'vue'

export interface SortOption {
  value: string,
  label: string
}

export const defaultSortOptions: SortOption[] = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Сначала дешевле' },
  { value: 'price-desc', label: 'Сначала дороже' },
  { value: 'in-stock', label: 'В наличии' },
]

export function useSorting(
  products: Ref<ProductItem[]>,
  sortValue: Ref<string>
) {
  const getActualPrice = (p: ProductItem): number =>
    p.newPrice > 0 ? p.newPrice : (p.oldPrice ?? 0)

  const sortedProducts = computed(() => {
    const list = [...products.value]

    switch (sortValue.value) {
      case 'price-asc':
        return list.sort((a, b) => getActualPrice(a) - getActualPrice(b))
      case 'price-desc':
        return list.sort((a, b) => getActualPrice(b) - getActualPrice(a))
      case 'in-stock':
        return list.sort((a, b) => {
          if (a.inStock === b.inStock) return 0
          return a.inStock ? -1 : 1
        })
        default: return list
    }
  })

  return {sortedProducts}
}