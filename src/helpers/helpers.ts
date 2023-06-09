import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

export function toCurrencyFormat(value: number) {
  return currencyFormat.format(value)
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.getElementsByClassName('drawer-content')[0].scrollTo(0, 0)
  }, [pathname])
  return null
}
