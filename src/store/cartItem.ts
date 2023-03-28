import { atom, selector } from 'recoil'
import { CART_ITEM } from '../composable/useCartLoad'
import { productsList } from './products'
import { CartInfo, CartItems, CartState } from '../model/Props'
import { useNavigate } from 'react-router-dom'

export const cartState = atom<CartState>({
  key: 'cart',
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) &&
        setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string))
      onSet((v) => localStorage.setItem(CART_ITEM, JSON.stringify(v)))
    },
  ],
})

export const cartCount = selector<number>({
  key: 'cartCount',
  get: ({ get }) => {
    const cart = get(cartState)
    return Object.keys(cart).reduce((prev: number, idx: string) => {
      return prev + cart[idx].count || 0
    }, 0)
  },
})

export const cartTotalPrice = selector<number>({
  key: 'cartTotal',
  get: ({ get }) => {
    const products = get(productsList)
    const cart = get(cartState)
    return Object.keys(cart).reduce((prev: number, idx: string) => {
      return prev + cart[idx].count * products[parseInt(idx) - 1].price || 0
    }, 0)
  },
})

export const cartList = selector<CartItems[]>({
  key: 'cartList',
  get: ({ get }) => {
    const products = get(productsList)
    const cart = get(cartState)
    return Object.keys(cart).map((id) => {
      const items = cart[id]
      return {
        id: items.id,
        image: products[items.id - 1].image,
        title: products[items.id - 1].title,
        price: items.count * products[items.id - 1].price,
        count: items.count,
      }
    })
  },
})

export const addToCart = (cart: CartState, id: number) => {
  if (!cart[id]) {
    cartState[id] = {
      id: id,
      count: 1,
    }
    return { ...cart, [id]: { id: id, count: 1 } }
  }
  cartState[id].count++
  return { ...cart, [id]: { id: id, count: cartState[id].count } }
}

export const removeFromCart = (cart: CartState, id: number) => {
  const tempCart = { ...cart }
  if (tempCart[id].count === 1) {
    delete tempCart[id]
    return tempCart
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } }
  }
}

export const clearFromCart = () => {
  localStorage.removeItem(CART_ITEM)
}
