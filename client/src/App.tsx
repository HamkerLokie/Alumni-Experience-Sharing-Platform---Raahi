import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App () {
  return (
    <>
      <Navbar />

      <main className='bg-ter'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
