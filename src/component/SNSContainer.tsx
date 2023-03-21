import snsIcons from '../../public/assets/SNSIcons'

export default function SNSContainer() {
  return (
    <div className="grid grid-flow-col gap-4">
      {snsIcons.map(({name, href, icon}) => (
        <a key={name} target="_blank" href={href} className="tooltip" data-tip={name}>{icon()}</a>
      ))}
    </div>
  )
}
