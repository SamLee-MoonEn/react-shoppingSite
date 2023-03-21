import TabItem from './TabItem'

export default function Tab() {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <TabItem>패션</TabItem>
      <TabItem>악세서리</TabItem>
      <TabItem>디지털</TabItem>
    </div>
  )
}
