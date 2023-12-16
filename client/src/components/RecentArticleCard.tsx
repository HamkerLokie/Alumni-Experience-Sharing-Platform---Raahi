import React from 'react'
import { Link } from 'react-router-dom'

interface RecentArticleProps {
  id: string
  title: string
  description: string
  name: string
  date: string
}

const RecentArticleCard: React.FC<RecentArticleProps> = ({
  id,
  title,
  description,
  name,
  date
}) => {
  const parseDate = (str: string) => {
    let dt = new Date(str)
    return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear()
  }
  return (
    <>
      <Link to={`/article/${id}`}>
        <div className='article-card '>
          <span className='title'>{title}</span>
          <span className='summary'>{description}</span>
          <div className='flex mt-2'>
            <span className='name'>by {name}</span>
            <span className='time'> {parseDate(date)}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default RecentArticleCard
