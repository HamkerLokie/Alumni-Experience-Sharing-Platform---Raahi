import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApiError from '../hooks/useApiError'
import useApiSuccess from '../hooks/useApiSuccess'
import axios from '../axios'
import Loader from '../ui/Loader'
import parse from 'html-react-parser'

interface ArticleData {
  email: string
  companyName: string
  createdAt: string
  description: string
  fullName: string
  showName: string
  tags: string[]
  title: string
  _id: string
}

const ReadArticle = () => {
  const { handleApiSuccess } = useApiSuccess()
  const { handleApiError } = useApiError()
  const [loading, setLoading] = useState<boolean>(false)
  const [articleData, setArticleData] = useState<ArticleData | null>()

  const { articleId } = useParams()

  const fetchArticle = useCallback(async () => {
    const queryString = `/articles/${articleId}`
    try {
      setLoading(true)
      const response = await axios.get(queryString)
      setArticleData(response.data?.data[0])
      handleApiSuccess(response.data)
    } catch (error) {
      handleApiError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchArticle()
  }, [articleId])

  const parseDate = (str: string) => {
    let dt = new Date(str)
    return dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear()
  }

  const removeSpaces = (str: string) => {
    return str?.replace(/\s/g, '') || ''
  }

  const parseHTMLTags = (str: string) => {
    return (
      str?.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') ||
      ''
    )
  }


  return (
    <div className=' w-full flex justify-center p-5 items-center'>
      {loading ? (
        <Loader />
      ) : (
        <div className='read-art bg-light p-5 m-auto w-[70%]'>
          <h2 className='font-[600]  text-2xl italic font-josefin  text-blue-gray-800'>
            {articleData?.title}
          </h2>
          <div className='font-prompt text-sm'>
            &nbsp;by{' '}
            {articleData?.showName ? `${articleData.fullName}` : ' Cuian '}{' '}
            &nbsp; |&nbsp; {parseDate(articleData?.createdAt!)} &nbsp; |&nbsp;
            <Link
              className='text-black underline px-1 rounded-full'
              to={`/interview/${articleData?.companyName}`}
            >
              {articleData?.companyName}
            </Link>
            <div className='my-2'>
              Tags:
              {articleData?.tags.map(tag => {
                return (
                  <span className='bg-black text-white text-center mx-1 px-[.8em] rounded-full'>
                    {removeSpaces(tag)}{' '}
                  </span>
                )
              })}
            </div>
            <div className='article-post'>
              {parse(parseHTMLTags(articleData?.description!))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReadArticle
