import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import cx from 'clsx'

import BreadCrumbs from '../component/BreadCrumbs'
import EmptyCart from '../component/EmptyCart'
import CartCard from '../component/CartCard'
import { cartList, cartTotalPrice } from '../store/cartItem'
import { toCurrencyFormat } from '../helpers/helpers'
import Modal from '../component/Modal'
import { CartItems } from '../model/Props'

export default function Cart(): JSX.Element {
  const cartLoadable = useRecoilValueLoadable<CartItems[]>(cartList)
  const cartItems: CartItems[] =
    'hasValue' === cartLoadable.state ? cartLoadable.contents : []
  const totalPrice = useRecoilValueLoadable(cartTotalPrice).contents || 0

  if ('loading' === cartLoadable.state) {
    return <div className="pt-24 pb-8 px-4">Loading...</div>
  }

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs />
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((item) => <CartCard key={item.id} item={item} />)
          )}
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">
              총: {toCurrencyFormat(totalPrice)}
            </span>
            <label
              htmlFor="confirm-modal"
              className={cx(
                'modal-button btn ml-5',
                cartItems.length === 0 ? 'btn-disabled' : 'btn-primary',
              )}
            >
              구매하기
            </label>
          </div>
        </div>
        <Modal />
      </section>
    </section>
  )
}
