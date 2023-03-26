import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { cartCount } from '../store/cartItem'
import ModeToggleBtn from './ModeToggleBtn'
import Search from './Search'

export default function SearchContainer(): JSX.Element {
  const count = useRecoilValue(cartCount)

  return (
    <div className="flex items-center px-2">
      <ModeToggleBtn />
      <Search />
      <Link to="/cart" className="btn btn-ghost w-10 sm:w-12 ml-1">
        <span className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-gray-700 dark:stroke-wh
            "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          <span className="indicator-item badge badge-primary">
            {count || 0}
          </span>
        </span>
      </Link>
    </div>
  )
}
