const CompanyTagSkeleton = () => {
  return (
    <div
      role='status'
      className='w-[80%] flex flex-col gap-3  animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
    >
      {[...Array(15)].map(_ => (
        <>
          <div className='comp-ske flex items-center  p-input rounded-full justify-between w-full '>
            <div className='flex items-center justify-between'>
              <div className='h-[1em] w-[1em] mr-2 bg-pri rounded-full dark:bg-gray-700'></div>
              <div className='h-1 bg-pri rounded-full dark:bg-gray-600 w-24'></div>
            </div>
            <div className='h-[.6em] w-[.6em] ml-5 bg-pri rounded-full dark:bg-gray-700'></div>
          </div>
        </>
      ))}
    </div>
  )
}

export default CompanyTagSkeleton
