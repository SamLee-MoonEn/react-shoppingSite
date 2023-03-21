import React, { Suspense } from 'react'
import { useRecoilValueLoadable, useRecoilTransaction_UNSTABLE } from 'recoil'
import { Product } from '../model/Props'
import { productsList } from '../store/products'
import BreadCrumbs from '../component/BreadCrumbs'
import SuspenseCard from '../component/Suspense'

export default function Fashion(): JSX.Element {
  const ProductCard = React.lazy(() => import('../component/ProductCard'))
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  products = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category == "women's clothing",
  )

  return (
    <>
      <section className="main pt-16">
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <BreadCrumbs category="men's clothing" />
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            패션
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
