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
      <div>
       
        <Link
          to={`/interview/${company}`}
          className='bg-light rounded-full p-pad list-group-item col-12 px-3 flex justify-between items-center list-box mt-1'
        >
          <div className='col-span-11 flex items-center'>
            <img src={img} alt='' className=' w-1/5 transform rounded-full' />
            <span className='ml-2 text-md '>
              {company.charAt(0).toUpperCase() + company.slice(1)}
            </span>
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
