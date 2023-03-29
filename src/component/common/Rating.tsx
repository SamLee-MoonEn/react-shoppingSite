import { RatingProps } from '../../model/Props'
import cx from 'clsx'

export default function Rating({ rating }: RatingProps): JSX.Element {
  const ratingArr = Array(10).fill(null)
  const rateNum = Math.floor(rating.rate / 0.5)

  return (
    <>
      <div className="rating rating-half">
        {ratingArr.map((_, idx) => {
          return (
            <input
              key={idx}
              type="radio"
              name="rating-10"
              className={cx(
                'cursor-default bg-yellow-400 mask mask-star-2',
                idx % 2 == 0 ? 'mask-half-1' : 'mask-half-2',
              )}
              disabled
              checked={rateNum - 1 === idx ? true : false}
            />
          )
        })}
      </div>
      <div className="ml-2">
        {' '}
        {rating.rate} / {rating.count} 참여
      </div>
    </>
  )
}
