import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import RecentArticleCard from './RecentArticleCard'
import {
  fetchRecentArticle,
  sortByDate,
  sortByName
} from '../store/slices/recentArticleSlice'
import ListComponent from '../ui/HomeLayout'
import ArticleCardSkeleton from '../ui/Skeletons/ArticleCardSkeleton'

const RecentArticles = () => {
  const dispatch = useAppDispatch()

  const { loading, data, error } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchRecentArticle())
  }, [])

  const handleName = () => {
    dispatch(sortByName())
  }
  const handleDate = () => {
    dispatch(sortByDate())
  }

  const buttons = [
    { label: 'Name', onClick: handleName },
    { label: 'Date', onClick: handleDate }
  ]

  return (
    <ListComponent
      title='Recent Articles'
      data={data}
      loading={loading}
      error={error}
      buttons={buttons}
      renderItem={article => (
        <>
          {loading ? (
            <ArticleCardSkeleton />
          ) : (
            <>
              <RecentArticleCard
                id={article._id}
                title={article.title}
                description={article.description}
                date={article.createdAt}
                name={article.fullName}
                showName={article.showName}
                userImage={article.userImage}
              />
            </>
          )}
        </>
      )}
    />
  )
}

export default RecentArticles
