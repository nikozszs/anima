import image1 from '../assets/image1.svg'

export interface SalesItem {
  id: number,
  isSale: boolean,
  image: string,
  title: string,
  subtitle: string,
  newPrice: number,
  oldPrice: number
}

export const salesItems: SalesItem[] = [
  { id: 1,
    isSale: true,
    image: image1,
    title: "Kratki",
    subtitle: "Каминная топка Kratki ZUZIA LPT",
    newPrice: 16490,
    oldPrice: 20000
  },
  { id: 2,
    isSale: true,
    image: image1,
    title: "Kratki",
    subtitle: "Каминная топка Kratki ZUZIA LPT",
    newPrice: 16490,
    oldPrice: 20000
  },
  { id: 3,
    isSale: true,
    image: image1,
    title: "Kratki",
    subtitle: "Каминная топка Kratki ZUZIA LPT",
    newPrice: 16490,
    oldPrice: 20000
  },
  { id: 4,
    isSale: true,
    image: image1,
    title: "Kratki",
    subtitle: "Каминная топка Kratki ZUZIA LPT",
    newPrice: 16490,
    oldPrice: 20000
  }
]