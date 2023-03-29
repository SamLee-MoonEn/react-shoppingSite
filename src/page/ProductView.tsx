import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'
import { productsList } from '../store/products'
import { Product } from '../model/Props'

import SuspenseCard from '../component/common/Suspense'
import BreadCrumbs from '../component/common/BreadCrumbs'

export default function ProductView(): JSX.Element {
  const ProductDetail = React.lazy(
    () => import('../component/common/ProductDetail'),
  )
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  const productId = Number(useParams().id)
  const product = products.filter((v) => v.id == productId)

  if ('loading' === ProductsLoadable.state) {
    return <div className="pt-24 pb-8 px-4">Loading...</div>
  }

  return (
    <section className="pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 sl:px-2 xl:container mx-auto">
        <div>
          <BreadCrumbs category={product[0].category} item={product[0].title} />
          <Suspense fallback={<SuspenseCard />}>
            <ProductDetail product={product} />
          </Suspense>
        </div>
      </section>
    </section>
  )
}
