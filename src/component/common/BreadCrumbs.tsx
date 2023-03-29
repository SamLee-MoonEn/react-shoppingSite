import { Link } from 'react-router-dom'
import { BreadCrumbsProps } from '../model/Props'

const Category: any = {
  "men's clothing": { title: '패션', href: '/fashion' },
  "women's clothing": { title: '패션', href: '/fashion' },
  jewelery: { title: '악세서리', href: '/accessory' },
  electronics: { title: '디지털', href: '/digital' },
} as const

export default function BreadCrumbs({
  category,
  item,
}: BreadCrumbsProps): JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to={!!category ? Category[category].href : ''}>
            {!!category ? Category[category].title : '장바구니'}
          </Link>
        </li>
        {!!item ? <li>{item}</li> : ''}
      </ul>
    </div>
  )
}
