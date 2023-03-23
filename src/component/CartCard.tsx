import { Link } from 'react-router-dom'
import { useRecoilValueLoadable, useRecoilValue, useRecoilState } from 'recoil'
import { productsList } from '../store/products'
import { Product, CartState } from '../model/Props'
import { toCurrencyFormat } from '../helpers/helpers'
import { addToCart, cartState, removeFromCart } from '../store/cartItem'
import { useEffect, useState } from 'react'

export default function CartCard({ id }: Record<string, string>) {
  const [cart, setCart] = useRecoilState<CartState>(cartState)
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  const itemCount = useRecoilValue(cartState)[id].count
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  products = products.filter((item) => item.id === Number(id))

  const addCartItemHandler = () => {
    setCart(addToCart(cart, Number(id)))
  }
  const removeCartItemHandler = () => {
    setCart(removeFromCart(cart, Number(id)))
  }
  return (
    <div className="lg:flex justify-between mb-20">
      <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
        <Link to="/">
          <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img
              src={products[0].image}
              alt={products[0].title}
              className="object-contain w-full h-48"
            />
          </figure>
        </Link>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">{products[0].title}</h2>
          <p className="mt-2 mb-4 text-3xl">
            {toCurrencyFormat(products[0].price)}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={removeCartItemHandler}>
              -
            </button>
            <button className="btn btn-ghost no-animation">{itemCount}</button>
            <button className="btn btn-primary" onClick={addCartItemHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
