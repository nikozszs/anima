export interface ProductItem {
  model: number,
  article: number,
  inStock: boolean,
  percentSale?: number,
  id: number,
  isSale: boolean,
  image: string,
  title: string,
  subtitleNDS: string,
  amount: number,
  newPrice: number,
  oldPrice: number
}

export interface characteristicsItem {
  typeOfStone: string, // Вид камня (Дикий камень, Гранит, Мрамор)
  product: string, // Изделие (Камины, Столешницы, Панно)
  color: string, // Цвет (Белый, Черный, Серый)
  field: string // Месторождение (Италия, Греция, Турция)
}

export const products: ProductItem[] = [
  
]