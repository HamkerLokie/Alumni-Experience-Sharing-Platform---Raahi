const ReadArticleSkeleton = () => {
  return (
    <div className='read-art-sk w-[60%] mt p-5 top-0 animate-pulse flex flex-col space-y-4'>
      <div className='rounded bg-pri h-8 w-full'></div>
      <div className='flex justify-between items-center'>
        <div className='rounded-full bg-pri h-12 w-12'></div>
        <div className='h-6 bg-pri rounded w-1/4'></div>
      </div>
      <div className='space-y-2'>
        <div className='h-4 bg-pri rounded'></div>
        <div className='h-4 bg-pri rounded w-5/6'></div>
        <div className='h-4 bg-pri rounded w-2/3'></div>
      </div>
      <div className='flex space-x-2'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='h-6 w-6 bg-pri rounded-full'></div>
          ))}
      </div>
      <div className='h-4 bg-pri rounded w-full'></div>
      <div className='h-4 bg-pri rounded w-11/12'></div>
      <div className='h-4 bg-pri rounded w-5/6'></div>
      <div className='h-4 bg-pri rounded w-full'></div>
      <div className='h-4 bg-pri rounded w-11/12'></div>
      <div className='space-y-2'>
        <div className='h-4 bg-pri rounded'></div>
        <div className='h-4 bg-pri rounded w-5/6'></div>
        <div className='h-4 bg-pri rounded w-2/3'></div>
      </div>
      <div className='h-4 bg-pri rounded w-5/6'></div>
      <div className='flex flex-col items-end space-x-2'>
        <div className='h-4 bg-pri rounded'></div>
        <div className='h-4 bg-pri rounded w-2/3'></div>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='h-6 w-6 m-1 bg-pri rounded-full'></div>
          ))}
      </div>
    </div>
  )
}

export default ReadArticleSkeleton
