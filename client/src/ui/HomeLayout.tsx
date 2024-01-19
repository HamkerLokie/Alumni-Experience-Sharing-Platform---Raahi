import React from 'react'
import ErrorCard from './ErrorCard'
import Heading from './Heading'
import NoDataCard from './NoDataCard'
import Loader from './Loader'

interface ListComponentProps<T> {
  title: string
  data: T[]
  loading: boolean
  error: string | null
  renderItem: (item: T) => React.ReactNode
  buttons?: {
    label: string
    onClick: () => void
  }[]
}
function ListComponent<T> ({
  title,
  data,
  loading,
  error,
  renderItem,
  buttons
}: ListComponentProps<T>) {
  return (
    <div className='home-layout list-component companies w-[25%] text-center font-archivo flex flex-col items-center text-lg p-input overflow-scroll'>
      <Heading heading={title} />
      {buttons && (
        <div className='w-full btn-wrap'>
          {buttons.map(button => (
            <button
              className='sort-btn bg-pri rounded px-2 font-josefin text-md shadow-xl mt-0 text-white m-1'
              key={button.label}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
      {loading && <Loader />}
      {error && <ErrorCard error={error} />}
      {data.length === 0 && !error && (
        <NoDataCard message={`Zero ${title} Found`} />
      )}
      <div className=' node-render overflow-x-hidden min-h-[40vh] max-h-[90vh] w-full '>
        {!loading &&
          data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
      </div>
    </div>
  )
}

export default ListComponent
