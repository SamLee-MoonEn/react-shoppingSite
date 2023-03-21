import { Link } from 'react-router-dom'

export default function SideBar({ closeSidebar }: any): JSX.Element {
  const menus = [
    { name: 'fashion', title: '패션' },
    { name: 'accessory', title: '악세서리' },
    { name: 'digital', title: '디지털' },
  ]

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {menus.map(({ name, title }) => {
          return (
            <li key={name}>
              <Link
                to={`/${name}`}
                className="!text-gray-700 active:!text-white dark:!text-white"
                onClick={closeSidebar}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
