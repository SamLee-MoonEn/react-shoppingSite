import Tab from './Tab'
import SearchContainer from './SearchContainer'

export default function Nav() {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <label
          htmlFor="side-menu"
          className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <a
            href="/"
            className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
          >
            React Shop
          </a>
        </h1>
        <Tab />
        <SearchContainer />
      </div>
    </div>
  )
}
