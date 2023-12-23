import React from 'react'
import ErrorCard from './ErrorCard'
import Heading from './Heading'
import NoDataCard from './NoDataCard'

interface ListComponentProps<T> {
  title: string
  data: T[]
  loading: boolean
  error: string | null
  renderItem: (item: T) => React.ReactNode
}
function ListComponent<T> ({
  title,
  data,
  loading,
  error,
  renderItem
}: ListComponentProps<T>) {
  return (
    <div className='list-component companies w-[25%] text-center font-archivo flex flex-col items-center text-lg p-input overflow-x-hidden max-h-[85vh] overflow-scroll'>
      <Heading heading={title} />
      {loading && <div>Loading...</div>}
      {error && <ErrorCard error={error} />}
      {data.length === 0 && !error && (
        <NoDataCard message={`Zero ${title} Found`} />
      )}

      {!loading &&
        data.map((item, index) => (
          <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
        ))}
    </div>
  )
}

export default ListComponent
