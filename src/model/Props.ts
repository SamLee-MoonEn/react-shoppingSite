export interface Product {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly category: string
  readonly price: number
  readonly image: string
  readonly rating: { rate: number; count: number }
}

export interface RatingProps {
  rating: { rate: number; count: number }
}

export interface ProductDetailProps {
  product: Product[]
}

export interface BreadCrumbsProps {
  category?: string
  item?: string
}

export interface CarouselItemProps {
  item: {
    imgSrc: string
    title: string
    description: string
    href: string
  }
}
export interface CartInfo {
  id: number
  count: number
}
export interface CartItems {
  id: string
  title: string
  price: number
  count: number
  image: string
}

export interface CartState {
  items?: Record<string | number, CartInfo>
}

export interface CategoryProps {}

export interface Item {
  item: CartItems
}
