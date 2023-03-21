import { Product } from '../model/Props'
import { toCurrencyFormat } from '../helpers/helpers'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={'/product/' + product.id}
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="transition-transform duration-300"
        />
      </figure>
      <div className="card-body dark:bg-gray-700 bg-gray-100 ">
        <p className="card-title text-base">{product.title}</p>
        <p className="text-base">{toCurrencyFormat(product.price)}</p>
      </div>
    </Link>
  )
}
