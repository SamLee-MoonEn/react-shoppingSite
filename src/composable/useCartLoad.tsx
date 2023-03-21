import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { cartState } from '../store/cartItem'

export const CART_ITEM = 'CART_ITEM'

export default function useCartLoad() {
  const cartStore = useRecoilValue(cartState)
  const setCartData = () => {
    localStorage.setItem(CART_ITEM, JSON.stringify(cartStore))
  }
  useEffect(() => {
    return setCartData()
  }, [cartStore])
}
