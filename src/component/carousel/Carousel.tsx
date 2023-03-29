import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import CarouselItem from './CarouselItem'

const carouselItems = [
  {
    imgSrc: 'assets/img_shop_fashion.jpeg',
    title: '물빠진 청바지!',
    description: '이제 막 도착한 패션 청바지를 구경해보세요.',
    href: '/fashion',
  },
  {
    imgSrc: 'assets/img_shop_digital.jpeg',
    title: '신속한 업무처리!',
    description: '다양한 디지털 상품을 둘러보세요.',
    href: '/digital',
  },
  {
    imgSrc: 'assets/img_shop_grocery.jpeg',
    title: '신선한 식품!',
    description: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
    href: '/grocery',
  },
]

export default function CarouselComp() {
  return (
    <>
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
        {carouselItems.map((item, idx) => (
          <CarouselItem key={idx} item={item} />
        ))}
      </Carousel>
    </>
  )
}
