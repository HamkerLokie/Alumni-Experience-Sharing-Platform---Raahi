import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ArticlesCompany from './pages/ArticlesCompany'
import WriteArticle from './pages/WriteArticle'
import RequestArticle from './pages/RequestArticle'
import Guidelines from './pages/Guidelines'
import toastOptions from './defs/toastOptions'
import { Toaster } from 'react-hot-toast'
import ReadArticle from './pages/ReadArticle'
import AuthenticationComponent from './components/AuthenticationComponent'


function App () {
  const location = useLocation()
  const isAuthenticationComponentVisible =
    !location.pathname.startsWith('/article')

  return (
    <>
      <Toaster position='top-center' toastOptions={toastOptions}></Toaster>
      <Navbar />

      <main className='bg-ter'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/interview/:companyName' element={<ArticlesCompany />} />
          <Route path='/article/write' element={<WriteArticle />} />
          <Route path='/article/request' element={<RequestArticle />} />
          <Route path='/article/:articleId' element={<ReadArticle />} />
          <Route path='/article/guidelines' element={<Guidelines />} />
        </Routes>
      </main>

      {
        <div
          className={
            isAuthenticationComponentVisible
              ? 'fixed bottom-5 right-[45%] '
              : 'fixed bottom-5 right-2 '
          }
        >
          <AuthenticationComponent />
        </div>
      }
    </>
  )
}

export default App
