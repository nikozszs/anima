import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface NavigationItem {
  name: string
  route: string
  active: boolean
}

interface UseNavigationCategoryOptions {
  baseNavigation?: NavigationItem[]
  showOnPaths?: string[]
  sortOptions?: { value: string; label: string }[]
}

const defaultBaseNavigation: NavigationItem[] = [
  {name: 'Главная', route: '/', active: false},
  {name: 'Каталог', route: '/catalog', active: false},
]

const defaultSortOptions = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Сначала дешевле' },
  { value: 'price-desc', label: 'Сначала дороже' },
  { value: 'in-stock', label: 'В наличии'}
]

export function useNavCategory(options: UseNavigationCategoryOptions = {}) {
  const route = useRoute()
  const router = useRouter()

  const {
    baseNavigation = defaultBaseNavigation,
    showOnPaths = ['/catalog', '/sales'],
    sortOptions = defaultSortOptions
  } = options

  const select = ref('default')

  const listNavigation = computed((): NavigationItem[] => {
    const currentPath = route.path
    const navigationWithActive: NavigationItem[] = baseNavigation.map(item => ({
      ...item,
      active: item.route === currentPath
    }))

    if (currentPath.startsWith('/catalog/')) {
      const productName = route.params.id
      return [
        ...navigationWithActive,
        {
          name: decodeURIComponent(String(productName)),
          route: currentPath,
          active: true
        }
      ]
    }

    const hasActive = navigationWithActive.some(item => item.active)

    if (!hasActive && navigationWithActive.length > 0) {
      const lastIndex = navigationWithActive.length - 1
      const lastItem = navigationWithActive[lastIndex]
      if (lastItem) {
        lastItem.active = true
      }
    }

    return navigationWithActive
  })

  const showBlock = computed(() => {
    const currentPath = route.path
    return showOnPaths.some(path => {
      if (path.includes('*')) {
        const pattern = path.replace('*', '')
        return currentPath.startsWith(pattern)
      }
      return currentPath === path
    })
  })

  const handleSortChange = () => {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        sort: select.value
      }
    })
  }

  watch(
    () => route.query.sort,
    (newSort) => {
      if (newSort && typeof newSort === 'string') {
        select.value = newSort
      } else {
        select.value = 'default'
      }
    }
  )

  return {
    //данные
    listNavigation,
    showBlock,
    select,
    sortOptions,
    //методы
    handleSortChange,
  }
}