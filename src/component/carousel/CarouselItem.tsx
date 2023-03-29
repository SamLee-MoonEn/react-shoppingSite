import { CarouselItemProps } from '../../model/Props'

export default function CarouselItem({ item }: CarouselItemProps) {
  return (
    <div className="carousel-slide">
      <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          {item.title}
        </h2>
        <p className="my-2 text-white">{item.description}</p>
        <a className="btn btn-sm lg:btn-md mt-3" href={item.href}>
          바로가기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 ml-1"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <img src={item.imgSrc} />
    </div>
  )
}
