import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import RecentArticleCard from './RecentArticleCard'
import {
  fetchRecentArticle,
  sortByName
} from '../store/slices/recentArticleSlice'
import ListComponent from '../ui/HomeLayout'

const RecentArticles = () => {
  const dispatch = useAppDispatch()

  const { loading, data, error } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchRecentArticle())
  }, [])

  const handleButtonClick = () => {
    dispatch(sortByName())
  }

  const buttons = [{ label: 'Sort By Name', onClick: handleButtonClick }]

  return (
    <ListComponent
      title='Recent Articles'
      data={data}
      loading={loading}
      error={error}
      buttons={buttons}
      renderItem={article => (
        <RecentArticleCard
          id={article._id}
          title={article.title}
          description={article.description}
          date={article.createdAt}
          name={article.fullName}
        />
      )}
    />
  )
}

export default RecentArticles
