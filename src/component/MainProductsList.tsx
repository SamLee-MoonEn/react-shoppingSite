import React, { Suspense } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { Product } from '../model/Props'
import { productsList } from '../store/products'
import SuspenseCard from '../component/Suspense'

const limit = 4

export default function MainProductsList({
  title,
}: {
  title: string
}): JSX.Element {
  const ProductCard = React.lazy(() => import('./ProductCard'))
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []

  switch (title) {
    case '패션':
      products = products
        .filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category == "women's clothing",
        )
        .slice(0, limit)
      break
    case '악세서리':
      products = products
        .filter((item) => item.category === 'jewelery')
        .slice(0, limit)
      break
    case '디지털':
      products = products
        .filter((item) => item.category === 'electronics')
        .slice(0, limit)
      break
  }
  return (
    <>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
        {products.map((product) => (
          <Suspense key={product.id} fallback={<SuspenseCard />}>
            <ProductCard product={product} />
          </Suspense>
        ))}
      </div>
    </>
  )
}
