const ArticleCardSkeleton = () => {
  return (
    <>
      {[...Array(12)].map(_ => (
        <div className='article-card-skeleton shadow-sm bg-gray-100 p-4 rounded border-0 bg-blue-gray-600'>
          <div className='animate-pulse flex space-x-4'>
            <div className='flex-1 space-y-4 py-1'>
              <div className='h-4 bg-pri rounded'></div>
              <div className='h-4 bg-pri rounded'></div>
              <div className='h-4 bg-pri rounded w-3/4'></div>
              <div className='h-4 bg-pri rounded w-9/10'></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ArticleCardSkeleton
