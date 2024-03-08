import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './Pages/HomeComponent.tsx'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
      </Routes>
    </>
  )
}

export default App
