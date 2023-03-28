import { useEffect, useState, useRef } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { Link } from 'react-router-dom'

import { Product } from '../model/Props'
import { productsList } from '../store/products'

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const [productList, setProductList] = useState<Product[]>([])
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  const $searchInput = useRef<HTMLInputElement>(null)
  const $productItem = '.search-item'

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  const resetInput = () => {
    setSearchValue('')
  }
  const focusSearchList = (e: any) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      let $next = e.target.nextElementSibling
      if (!$next || !$next.querySelector($productItem)) {
        return
      }
      $next.querySelector($productItem).focus()
    }
  }

  const changeSearchItem = (e: any) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      let $next = e.target.parentElement.nextElementSibling
      if (!$next) {
        return
      }
      $next.querySelector($productItem).focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      let $prev = e.target.parentElement.previousElementSibling
      if (!$prev) {
        $searchInput.current?.focus()
        return
      }
      $prev.querySelector($productItem).focus()
    } else if (e.key === 'Enter') {
      resetInput()
    }
  }
  const toggleSearch = () => {
    $searchInput?.current?.classList.toggle('-z-10')
    $searchInput?.current?.classList.toggle('translate-y-full')
    $searchInput?.current?.classList.toggle('!opacity-100')
    $searchInput?.current?.blur()
    resetInput()
  }

  useEffect(() => {
    if (!searchValue) {
      setProductList([])
      return
    }
    setProductList(
      products.filter((v) =>
        v.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      ),
    )
  }, [searchValue])

  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost"
        onClick={toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-700 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all"
        placeholder="검색"
        value={searchValue}
        onChange={handleChangeValue}
        onKeyDown={focusSearchList}
        ref={$searchInput}
      />
      <ul className="!fixed left-0 sm:!absolute top-28 sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600 flex-nowrap">
        {productList.map(({ id, title }) => {
          return (
            <li key={id} onKeyDown={changeSearchItem} onClick={resetInput}>
              <Link
                to={`product/${id}`}
                className="text-left search-item line-clamp-2"
              >
                <span className="text-gray-600 dark:text-white line-clamp-2">
                  {title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
