import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import ut from '../assets/ut.svg'
import pinterest from '../assets/pinterest.svg'

export interface Icon {
  id: number,
  src: string,
  alt: string,
  href: string
}

export const icons: Icon[] = [
  {
    id: 1,
    src: facebook,
    alt: 'Facebook',
    href: 'https://facebook.com'
  },
  {
    id: 2,
    src: insta,
    alt: 'Instagram',
    href: 'https://instagram.com'
  },
  {
    id: 3,
    src: twitter,
    alt: 'Twitter',
    href: 'https://twitter.com'
  },
  {
    id: 4,
    src: ut,
    alt: 'YouTube',
    href: 'https://youtube.com'
  },
  {
    id: 5,
    src: pinterest,
    alt: 'Pinterest',
    href: 'https://pinterest.com'
  },
]