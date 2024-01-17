import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ArticlesCompany from './pages/ArticlesCompany'
import WriteArticle from './pages/WriteArticle'
import RequestArticle from './pages/RequestArticle'
import Guidelines from './pages/Guidelines'
import toastOptions from './ui/toastOptions'
import { Toaster } from 'react-hot-toast'

function App () {
  return (
    <>
      <Navbar />
      <Toaster position='top-center' toastOptions={toastOptions}></Toaster>

      <main className='bg-ter'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/interview/:companyName' element={<ArticlesCompany />} />
          <Route path='/article/write' element={<WriteArticle />} />
          <Route path='/article/request' element={<RequestArticle />} />
          <Route path='/article/guidelines' element={<Guidelines />} />
        </Routes>
      </main>
    </>
  )
}

export default App
