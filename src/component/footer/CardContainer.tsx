import cards from '../../../public/assets/cardIcons'

export default function CardContainer() {
  return (
    <ul className="flex">
      {cards.map(({ icon }, idx) => {
        return <li key={idx}>{icon()}</li>
      })}
    </ul>
  )
}
