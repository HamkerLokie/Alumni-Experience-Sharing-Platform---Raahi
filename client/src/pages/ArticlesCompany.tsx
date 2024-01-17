import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import { fetchCompanyArticle } from '../store/slices/recentArticleSlice'
import RecentArticleCard from '../components/RecentArticleCard'
import ErrorCard from '../ui/ErrorCard'
import NoDataCard from '../ui/NoDataCard'
import Loader from '../ui/Loader'

const ArticlesCompany = () => {
  const dispatch = useAppDispatch()
  const { companyName } = useParams()
  const { loading, data, error } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchCompanyArticle(companyName))
  }, [companyName])

  return (
    <Fragment>
      <h1 className='font-prompt text-xl font-[600] text-center p-2'>
        Interview Experience of{' '}
        {companyName?.charAt(0).toUpperCase()! + companyName?.slice(1)!}
        {loading && <Loader/>}
        {error && <ErrorCard error={error} />}
        <section className='flex gap-2 flex-wrap items-center justify-center mt-2'>
          {data.map(article => (
            <RecentArticleCard
              id={article._id}
              title={article.title}
              description={article.description}
              date={article.createdAt}
              name={article.fullName}
            />
          ))}
        </section>
      </h1>
    </Fragment>
  )
}

export default ArticlesCompany
