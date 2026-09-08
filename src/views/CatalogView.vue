<template>
  <div class='container'>
    <div class="decoration decoration-left"></div>
    <h2 class="title-other-color">Изделия из натурального камня</h2>
    <ListCategory />
    <div class="container-catalog">
      <div>
        <CatalogFilter @filter-change="handleFilterChange"/>
      </div>
      <ul class="catalog-gallery">
        <li v-for="item in filteredProducts"
          :key="item.id"
          >
          <AppCardSales
            :image="item.image"
            :title="item.title"
            :subtitle="item.subtitleNDS"
            :newPrice="item.newPrice"
            :isSale="item.isSale"
            :oldPrice="item.oldPrice">
          </AppCardSales>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import ListCategory from '../components/ui/ListCategory.vue';
import { products } from '../data/products.ts';
import {} from 'vue'
import AppCardSales from '../components/ui/AppCardSales.vue'
import CatalogFilter from '../components/ui/CatalogFilter.vue'
export default {
  components: {ListCategory, AppCardSales, CatalogFilter},
  setup(){
    const allProducts = ref(products)
    const selectedFilters = ref<Record<string, string[]>>({})

    const filterProducts = () => {
      if (Object.keys(selectedFilters.value).length === 0) {
        return allProducts.value
      }

      return allProducts.value.filter(product => {
        const matches = true

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

        return matches
      })
    }

    const filteredProducts = computed(() => {return filterProducts()})

    const handleFilterChange = (filters: Record<string, string[]>) => {
      selectedFilters.value = filters
    }

    return {
      allProducts,
      filteredProducts,
      handleFilterChange
    }
  }
}
</script>

<style scoped>
.container {
  background: var(--fourt-back);
  padding: 54px 99px 60px;
}

h2 {
  margin: 10px 0 19px;
}

.container-catalog {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
}

.catalog-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 37px;
  padding: 0;
  list-style: none;
}
</style>