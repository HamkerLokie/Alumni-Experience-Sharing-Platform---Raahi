import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ArticlesCompany from './pages/ArticlesCompany'

function App () {
  return (
    <>
      <Navbar />

      <main className='bg-ter'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/interview/:companyName' element={<ArticlesCompany />} />
        </Routes>
      </main>
    </>
  )
}

export default App
