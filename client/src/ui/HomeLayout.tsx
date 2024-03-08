import React from 'react'
import ErrorCard from './ErrorCard'
import Heading from './Heading'
import CompanyTagSkeleton from './Skeletons/CompanyTagSkeleton'
import ArticleCardSkeleton from './Skeletons/ArticleCardSkeleton'

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
          <span className='rounded-sm py-1 font-josefin text-sm '>
            Sort by:{' '}
          </span>
          {buttons.map(button => (
            <button
              className='sort-btn bg-pri rounded-sm px-3 py-1 font-josefin text-sm shadow-xl mt-0 text-white m-1'
              key={button.label}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
      {error && <ErrorCard error={error} />}
      <div className='node-render overflow-x-hidden min-h-[40vh] max-h-[90vh] w-full '>
        {loading ? (
          <>
            {title === 'Companies List' ? (
              <>
                <CompanyTagSkeleton />
              </>
            ) : (
              <>
                <ArticleCardSkeleton />
              </>
            )}
          </>
        ) : (
          data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))
        )}
      </div>
    </div>
  )
}

export default ListComponent
