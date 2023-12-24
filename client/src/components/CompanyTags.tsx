import React from 'react'
import { Link } from 'react-router-dom'

interface CompanyTagsProps {
  count: number
  company: string
  img: string
}

const CompanyTags: React.FC<CompanyTagsProps> = ({ count, company, img }) => {
  return (
    <>
      <div className='w-[70%] flex flex-col items-center'>
        <Link
          to={`/interview/${company}`}
          className='bg-light rounded-full p-pad w-[90%] px-3 flex justify-between items-center my-1'
        >
          <div className='flex items-center  w-full'>
            <img
              src={img}
              alt=''
              className='w-[30px] h-[30px] transform rounded-full'
            />
            <div className='text-md w-[100%] ml-2 text-start'>
              {company.charAt(0).toUpperCase() + company.slice(1)}
            </div>
          </div>
          <span className='col-span-1 text-sm bg-black text-white px-2 text-center font-prompt rounded-full'>
            {count}
          </span>
        </Link>
      </div>
    </>
  )
}

export default CompanyTags
