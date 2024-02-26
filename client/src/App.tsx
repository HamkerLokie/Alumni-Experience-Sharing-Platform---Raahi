import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import toastOptions from './defs/toastOptions'
import { Toaster } from 'react-hot-toast'
import AuthenticationComponent from './components/AuthenticationComponent'
import publicRoutes from './Routes/PublicRoutes'
import privateRoutes from './Routes/PrivateRoutes'

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
          {publicRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {privateRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
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
