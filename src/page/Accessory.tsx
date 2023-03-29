import React, { Suspense } from 'react'
import { useRecoilValueLoadable, useRecoilTransaction_UNSTABLE } from 'recoil'
import { Product } from '../model/Props'
import { productsList } from '../store/products'
import BreadCrumbs from '../component/common/BreadCrumbs'
import SuspenseCard from '../component/common/Suspense'

export default function Fashion(): JSX.Element {
  const ProductCard = React.lazy(
    () => import('../component/common/ProductCard'),
  )
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  products = products.filter((item) => item.category === 'jewelery')

  if ('loading' === ProductsLoadable.state) {
    return <div className="pt-24 pb-8 px-4">Loading...</div>
  }
  return (
    <>
      <section className="main pt-16">
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <BreadCrumbs category="jewelery" />
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            악세서리
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
            {products.map((e) => (
              <Suspense key={e.id} fallback={<SuspenseCard />}>
                <ProductCard product={e} />
              </Suspense>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
