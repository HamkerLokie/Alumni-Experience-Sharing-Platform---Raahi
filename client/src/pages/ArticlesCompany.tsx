import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import { fetchCompanyArticle } from '../store/slices/recentArticleSlice'
import RecentArticleCard from '../components/RecentArticleCard'
import ErrorCard from '../ui/ErrorCard'
import ArticleCardSkeleton from '../ui/Skeletons/ArticleCardSkeleton'

const ArticlesCompany = () => {
  const dispatch = useAppDispatch()
  const { companyName } = useParams()
  const { loading, data, error } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchCompanyArticle(companyName as string))
  }, [companyName])

  return (
    <Fragment>
      <h1 className='font-prompt text-xl font-[600] text-center p-2'>
        Interview Experience of{' '}
        {companyName?.charAt(0).toUpperCase()! + companyName?.slice(1)!}
        {error && <ErrorCard error={error} />}
        <section className='art-list flex gap-2 flex-wrap items-center justify-center mt-2'>
          {loading ? (
            <ArticleCardSkeleton />
          ) : (
            data.map(article => (
              <RecentArticleCard
                id={article._id}
                title={article.title}
                description={article.description}
                date={article.createdAt}
                name={article.fullName}
                showName={article.showName}
                userImage={article.userImage}
              />
            ))
          )}
        </section>
      </h1>
    </Fragment>
  )
}

export default ArticlesCompany
