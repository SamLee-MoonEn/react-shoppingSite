import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export default function TabItem({ children }: Props): JSX.Element {
  let href = ''
  switch (children) {
    case '패션':
      href = '/fashion'
      break
    case '악세서리':
      href = '/accessory'
      break
    case '디지털':
      href = '/digital'
      break
    default:
      href = '/'
      break
  }
  return (
    <Link
      className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
      to={href}
    >
      {children}
    </Link>
  )
}
