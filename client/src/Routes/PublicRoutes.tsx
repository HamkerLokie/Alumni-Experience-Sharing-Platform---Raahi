import { lazy, Suspense } from 'react'
import Guidelines from '../pages/Guidelines'
const ArticlesCompany = lazy(() => import('../pages/ArticlesCompany'))
import Homepage from '../pages/Homepage'
import ArticleCardSkeleton from '../ui/Skeletons/ArticleCardSkeleton'

const publicRoutes = [
  {
    path: '/article/guidelines',
    element: <Guidelines />
  },
  {
    path: '/interview/:companyName',
    element: (
      <Suspense fallback={<ArticleCardSkeleton />}>
        <ArticlesCompany />
      </Suspense>
    )
  },
  {
    path: '/',
    element: <Homepage />
  }
]

export default publicRoutes
