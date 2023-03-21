const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

export function toCurrencyFormat(value: number) {
  return currencyFormat.format(value)
}
