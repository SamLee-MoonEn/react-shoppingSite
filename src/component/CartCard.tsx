import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { CartState, Item } from '../model/Props'
import { toCurrencyFormat } from '../helpers/helpers'
import { addToCart, cartState, removeFromCart } from '../store/cartItem'

export default function CartCard({ item }: Item) {
  const [cart, setCart] = useRecoilState<CartState>(cartState)

  const addCartItemHandler = (id: number) => {
    setCart(addToCart(cart, id))
  }
  const removeCartItemHandler = (id: number) => {
    setCart(removeFromCart(cart, id))
  }
  return (
    <div className="lg:flex justify-between mb-20">
      <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
        <Link to={`/product/${item.id}`}>
          <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-48"
            />
          </figure>
        </Link>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title">{item?.title}</h2>
          <p className="mt-2 mb-4 text-3xl">{toCurrencyFormat(item.price)}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                removeCartItemHandler(Number(item.id))
              }}
            >
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {item?.count}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                addCartItemHandler(Number(item.id))
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
