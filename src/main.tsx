import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App'
import { CART_ITEM } from './composable/useCartLoad'
import './index.css'
import { cartState } from './store/cartItem'

const cartInitialize = () => {
  const initialValue =
    JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {}
  Object.assign(cartState, initialValue)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot initializeState={cartInitialize}>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
