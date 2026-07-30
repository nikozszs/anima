const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
  maximumFractionDigits: 0
})

export function currency(value: number) {
  return formatter.format(value)
}