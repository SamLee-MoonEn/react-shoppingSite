import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { cartCount } from '../store/cartItem'
import ModeToggleBtn from './ModeToggleBtn'

export default function Search(): JSX.Element {
  const count = useRecoilValue(cartCount)

  return (
    <div className="flex items-center px-2">
      <ModeToggleBtn />
      <div className="dropdown">
        <input
          className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
          placeholder="검색"
        ></input>
      </div>
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
