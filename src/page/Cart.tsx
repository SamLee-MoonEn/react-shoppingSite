import { useRecoilValue } from 'recoil'

import BreadCrumbs from '../component/BreadCrumbs'
import EmptyCart from '../component/EmptyCart'
import CartCard from '../component/CartCard'
import { cartState, cartTotalPrice } from '../store/cartItem'
import { toCurrencyFormat } from '../helpers/helpers'

export default function Cart(): JSX.Element {
  const cartStore = useRecoilValue(cartState)
  const totalPrice = useRecoilValue(cartTotalPrice)
  const cartList = Object.keys(cartStore)

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs />
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          {cartList.length === 0 ? (
            <EmptyCart />
          ) : (
            cartList.map((item) => <CartCard key={item} id={item} />)
          )}
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">
              총: {toCurrencyFormat(totalPrice)}
            </span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
          </div>
        </div>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
            <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
            <div className="modal-action">
              <label htmlFor="confirm-modal" className="btn btn-primary">
                네
              </label>
              <label htmlFor="confirm-modal" className="btn btn-outline">
                아니오
              </label>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
