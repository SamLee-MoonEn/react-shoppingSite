import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { toCurrencyFormat } from '../../helpers/helpers'
import { ProductDetailProps } from '../../model/Props'
import { cartState, addToCart } from '../../store/cartItem'
import { CartState } from '../../model/Props'

import Rating from './Rating'

export default function ProductDetail({
  product,
}: ProductDetailProps): JSX.Element {
  const [cart, setCart] = useRecoilState<CartState>(cartState)

  const addCartItemHandler = () => {
    setCart(addToCart(cart, product[0].id))
  }
  return (
    <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
        <img
          src={product[0].image}
          alt={product[0].title}
          className="object-contain w-full h-72"
        />
      </figure>
      <div className=" card-body px-1 lg:px-12">
        <h2 className="card-title">{product[0].title}</h2>
        <p>{product[0].description}</p>
        <div className="flex items-center mt-3">
          <Rating rating={product[0].rating} />
        </div>
        <p className="mt-2 mb-4 text-3xl">
          {toCurrencyFormat(product[0].price)}
        </p>
        <div className="card-actions">
          <button onClick={addCartItemHandler} className="btn btn-primary">
            장바구니에 담기
          </button>
          <Link to="/cart" className="btn btn-outline ml-1">
            장바구니로 이동
          </Link>
        </div>
      </div>
    </div>
  )
}
