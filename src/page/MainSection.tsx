import { useRecoilValueLoadable } from 'recoil'
import { productsList } from '../store/products'
import { Product } from '../model/Props'

import CarouselComp from '../component/carousel/Carousel'
import MainProductsList from '../component/MainProductsList'

export default function MainSection(): JSX.Element {
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList)
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : []
  return (
    <section className="main pt-16">
      <CarouselComp />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <MainProductsList title="패션" />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <MainProductsList title="악세서리" />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <MainProductsList title="디지털" />
      </section>
    </section>
  )
}
