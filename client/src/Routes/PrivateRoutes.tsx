import ReadArticle from '../pages/ReadArticle'
import RequestArticle from '../pages/RequestArticle'
import WriteArticle from '../pages/WriteArticle'
import ProtectedRoutes from './ProtectedRoutes'

const privateRoutes = [
  {
    path: '/article/write',
    element: (
      <ProtectedRoutes>
        <WriteArticle />
      </ProtectedRoutes>
    )
  },
  {
    path: '/article/request',
    element: (
      <ProtectedRoutes>
        <RequestArticle />
      </ProtectedRoutes>
    )
  },
  {
    path: '/article/:articleId',
    element: (
      <ProtectedRoutes>
        <ReadArticle />
      </ProtectedRoutes>
    )
  }
]

export default privateRoutes
