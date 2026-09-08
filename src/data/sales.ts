import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'

export interface SalesItem {
  id: number,
  isSale: boolean,
  image: string,
  title: string,
  subtitle: string,
  newPrice: number,
  oldPrice: number | null | undefined
}

export const salesItems: SalesItem[] = [
  { id: 1,
    isSale: true,
    image: image1,
    title: "Kratki",
    subtitle: "Каминная топка Kratki ZUZIA LPT",
    newPrice: 16490,
    oldPrice: 20990
  },
  { id: 2,
    isSale: true,
    image: image2,
    title: "Kratki",
    subtitle: "Стол Kratki ZUZIA L",
    newPrice: 26190,
    oldPrice: 40490
  },
  { id: 3,
    isSale: true,
    image: image3,
    title: "Kratki",
    subtitle: "Панно Kratki ZUJIA LT",
    newPrice: 18690,
    oldPrice: 25590
  },
  { id: 4,
    isSale: true,
    image: image4,
    title: "Kratki",
    subtitle: "Раковина Kratki ZUZIA LPT",
    newPrice: 160190,
    oldPrice: 210000
  }
]