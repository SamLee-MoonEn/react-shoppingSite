export default function SuspenseCard(): React.ReactElement {
  return (
    <>
      <div className="animate-pulse card bordered">
        <div className="h-80 rounded bg-gray-100"></div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="h-6 bg-gray-100 rounded"></div>
            <div className="h-6 bg-gray-100 rounded w-5/6"></div>
            <div className="h-6 bg-gray-100 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  )
}
