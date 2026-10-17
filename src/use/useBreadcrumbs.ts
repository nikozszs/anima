import { computed} from 'vue'
import { useRoute} from 'vue-router'

interface NavigationItem {
  name: string
  route: string
  active: boolean
}

interface UseNavigationCategoryOptions {
  showOnPaths?: string[]
}

export function useBreadcrumbs(options: UseNavigationCategoryOptions = {}) {
  const route = useRoute()

  const {
    showOnPaths = ['/catalog', '/sales']
  } = options

  const listNavigation = computed((): NavigationItem[] => {
    const currentPath = route.path

    const navigation: NavigationItem[] = [
      { name: 'Главная', route: '/', active: false }
    ]

    if (currentPath.startsWith('/sales')) {
      navigation.push({ name: 'Акции', route: '/sales', active: true })
    } else {
      navigation.push({ name: 'Каталог', route: '/catalog', active: true })
    }

    return navigation
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

  return {
    listNavigation,
    showBlock,
  }
}