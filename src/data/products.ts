import image1 from '../assets/image1.svg'
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.webp'
import image2 from '../assets/image2.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.webp'
import image3 from '../assets/image3.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'

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
  oldPrice?: number,
  characteristics: characteristicsItem,
  description: string
}

export interface characteristicsItem {
  typeOfStone: string, // Вид камня (Дикий камень, Гранит, Мрамор)
  product: string, // Изделие (Камины, Столешницы, Панно)
  color: string, // Цвет (Белый, Черный, Серый)
  field: string // Месторождение (Италия, Греция, Турция)
}

export const products: ProductItem[] = [
  {
    model: 183260090,
    article: 183260090,
    inStock: true,
    percentSale: 20,
    id: 1,
    isSale: true,
    image: image1,
    title: 'Каминная топка Kratki ZUZIA LPT',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 150,
    newPrice: 16490,
    oldPrice: 20990,
    characteristics: {
      typeOfStone: 'мрамор',
      product: 'подставка',
      color: 'белый, серый',
      field: 'Италия'
    },
    description: 'Элегантная каминная топка из натурального мрамора. Идеально подходит для создания уютной атмосферы в гостиной. Высокое качество итальянского камня, ручная обработка каждой детали. Топка обеспечивает равномерное распределение тепла и долгий срок службы.'
  },
  {
    model: 183260093,
    article: 183260093,
    inStock: true,
    id: 2,
    isSale: false,
    image: image7,
    title: 'Декоративные камни для сада',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 20,
    newPrice: 39500,
    characteristics: {
      typeOfStone: 'дикий камень',
      product: 'декор',
      color: 'коричневый',
      field: 'Турция'
    },
    description: 'Натуральные декоративные камни для ландшафтного дизайна. Экологически чистый материал из турецких карьеров. Идеально подходят для оформления садовых дорожек, альпийских горок и водоемов. Каждый камень уникален по форме и текстуре.'
  },
  {
    model: 183260094,
    article: 183260094,
    inStock: true,
    id: 3,
    isSale: false,
    image: image5,
    title: 'Кухонный гарнитур',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 1,
    newPrice: 1649000,
    characteristics: {
      typeOfStone: 'мрамор',
      product: 'кухня',
      color: 'белый',
      field: 'Италия'
    },
    description: 'Премиальный кухонный гарнитур из итальянского мрамора. Эксклюзивный дизайн, сочетающий в себе элегантность и функциональность. Столешницы из натурального камня устойчивы к царапинам и перепадам температур. Индивидуальный проект под ваш интерьер.'
  },
  {
    model: 183260098,
    article: 183260098,
    inStock: true,
    percentSale: 20,
    id: 4,
    isSale: true,
    image: image6,
    title: 'ВАЗА ИЗ ГРАНИТА «КАПУСТЯНСКОЕ',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 15,
    newPrice: 16300,
    oldPrice: 19300,
    characteristics: {
      typeOfStone: 'гранит',
      product: 'ваза',
      color: 'белый',
      field: 'Италия'
    },
    description: 'Изысканная ваза из натурального гранита ручной работы. Прочный и долговечный материал, устойчивый к внешним воздействиям. Отличный выбор для интерьера в классическом или современном стиле. Каждая ваза уникальна благодаря природному рисунку камня.'
  },
  {
    model: 183260091,
    article: 183260091,
    inStock: true,
    percentSale: 30,
    id: 5,
    isSale: true,
    image: image2,
    title: 'Стол Kratki ZUZIA L',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 3,
    newPrice: 26190,
    oldPrice: 40490,
    characteristics: {
      typeOfStone: 'дикий камень',
      product: 'стол',
      color: 'бежевый, коричневый',
      field: 'Турция'
    },
    description: 'Стол из натурального дикого камня с уникальной фактурой. Ручная работа мастеров из Турции. Идеально подходит для террасы, сада или интерьера в стиле лофт. Поверхность устойчива к влаге и перепадам температур, легка в уходе.'
  },
  {
    model: 183260092,
    article: 183260092,
    inStock: true,
    id: 6,
    isSale: true,
    image: image8,
    title: 'Комод трехъярусный из мрамора',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 3,
    newPrice: 26190,
    oldPrice: 40490,
    characteristics: {
      typeOfStone: 'мрамор',
      product: 'комод',
      color: 'серый',
      field: 'Италия'
    },
    description: 'Элегантный трехъярусный комод из итальянского мрамора. Сочетание классического дизайна и современных технологий обработки камня. Идеальное решение для хранения с эстетической составляющей. Каждый элемент тщательно отполирован для создания глянцевого блеска.'
  },
  {
    model: 183260095,
    article: 183260095,
    inStock: true,
    id: 7,
    percentSale: 10,
    isSale: true,
    image: image3,
    title: 'Панно Kratki ZUJIA LT',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 2,
    newPrice: 18690,
    oldPrice: 25590,
    characteristics: {
      typeOfStone: 'дикий камень',
      product: 'панно',
      color: 'серый',
      field: 'Италия'
    },
    description: 'Декоративное панно из натурального дикого камня. Уникальный рисунок и текстура создают неповторимый интерьерный акцент. Изделие ручной работы от итальянских мастеров. Идеально подходит для оформления стен в гостиной, холле или ресторане.'
  },
  {
    model: 183260096,
    article: 183260096,
    inStock: false,
    id: 8,
    percentSale: 10,
    isSale: true,
    image: image9,
    title: 'Стол из натурального камня',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 0,
    newPrice: 89690,
    oldPrice: 100990,
    characteristics: {
      typeOfStone: 'дикий камень',
      product: 'стол',
      color: 'серый',
      field: 'Бразилия'
    },
    description: 'Стол из натурального дикого камня. Уникальный рисунок и текстура серого камня создают неповторимый интерьерный акцент. Изделие ручной работы от бразильских мастеров. Идеально подходит для гостиной, столовой или загородного дома.'
  },
  {
    model: 183260097,
    article: 183260097,
    inStock: true,
    id: 9,
    percentSale: 0,
    isSale: true,
    image: image10,
    title: 'Раковина в ванную',
    subtitleNDS: 'Цена указана с учетом НДС',
    amount: 10,
    newPrice: 39190,
    oldPrice: 48990,
    characteristics: {
      typeOfStone: 'мрамор',
      product: 'раковина',
      color: 'серый',
      field: 'Турция'
    },
    description: 'Раковина из натурального мрамора. Уникальный рисунок и текстура серого камня делают каждое изделие неповторимым. Ручная работа турецких мастеров. Прочная и долговечная поверхность устойчива к влаге и механическим повреждениям. Идеально подходит для ванной комнаты или санузла.'
  },
]