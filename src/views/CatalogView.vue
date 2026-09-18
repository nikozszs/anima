<template>
  <div class='container'>
    <div class="decoration decoration-left"></div>
    <h2 class="title-other-color">Изделия из натурального камня</h2>
    <ListCategory @sort-change="onSortChange" />
    <div class="container-catalog">
      <div>
        <CatalogFilter @filter-change="handleFilterChange" />
      </div>
      <ul class="catalog-gallery">
        <li v-for="item in sortedProducts" :key="item.id">
          <AppCard :id="item.id" :image="item.image" :title="item.title" :subtitle="item.subtitleNDS"
            :newPrice="item.newPrice" :isSale="item.isSale" :oldPrice="item.oldPrice">
          </AppCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ListCategory from '../components/ui/ListCategory.vue';
import { useSelectedFilters } from '@/use/useSelectedFilters.ts';
import AppCard from '../components/ui/AppCard.vue'
import CatalogFilter from '../components/ui/CatalogFilter.vue'
import { ref } from 'vue'
import { useSorting } from '@/use/useSorting.ts';
export default {
  components: { ListCategory, AppCard, CatalogFilter },
  setup() {
    const { filteredProducts, selectedFilters } = useSelectedFilters()

    const handleFilterChange = (filters: Record<string, string[]>) => {
      selectedFilters.value = filters
    }

    const sortValue = ref('default')

    const onSortChange = (value: string) => {
      sortValue.value = value
    }

    const { sortedProducts } = useSorting(filteredProducts, sortValue)

    return {
      filteredProducts,
      handleFilterChange,
      onSortChange,
      sortedProducts
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
