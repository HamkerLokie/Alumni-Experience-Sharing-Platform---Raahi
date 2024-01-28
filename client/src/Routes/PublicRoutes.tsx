import Guidelines from '../pages/Guidelines'
import ArticlesCompany from '../pages/ArticlesCompany'
import Homepage from '../pages/Homepage'

const publicRoutes = [
  {
    path: '/article/guidelines',
    element: <Guidelines />
  },
  {
    path: '/interview/:companyName',
    element: <ArticlesCompany />
  },
  {
    path: '/',
    element: <Homepage />
  }
]

export default publicRoutes
