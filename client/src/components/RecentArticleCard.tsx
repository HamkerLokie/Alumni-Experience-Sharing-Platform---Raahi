import React from 'react'
import { Link } from 'react-router-dom'

interface RecentArticleProps {
  id: string
  title: string
  description: string
  name: string
  date: Date
}

const RecentArticleCard: React.FC<RecentArticleProps> = ({
  id,
  title,
  description,
  name,
  date
}) => {
  const parseDate = (str: Date) => {
    let dt = new Date(str)
    return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear()
  }
  return (
    <>
      <Link to={`/article/${id}`}>
        <div className='article-card  shadow-sm'>
          <span className='title'>{title}</span>
          <span className='summary'>{description}</span>
          <div className='flex mt-1'>
            <span className='name font-[500]'>by {name}</span>

            <span className='time'> {parseDate(date)}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RecentArticleCard
