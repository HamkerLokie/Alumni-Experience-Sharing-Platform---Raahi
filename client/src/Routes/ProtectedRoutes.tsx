import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import AuthenticationComponent from '../components/AuthenticationComponent'

type ProtectedRoutesProps = PropsWithChildren

export default function ProtectedRoutes ({ children }: ProtectedRoutesProps) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      toast.custom(
        t => (
          <div className='w-full bg-blue-gray-500/90 rounded-sm flex items-center justify-center m-0 p-input min-h-[100vh] '>
            <div
              className={`${
                t.visible ? 'animate-bounce' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className='flex-1  p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 pt-0.5'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src='https://i.pinimg.com/564x/29/47/9b/29479ba0435741580ca9f4a467be6207.jpg'
                      alt=''
                    />
                  </div>
                  <div className='ml-3 flex-1'>
                    <p className='text-md font-medium text-gray-900'>
                      ⚠️Login Required!!!⚠️
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>
                      Click ➡️ to Login
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center border-l w-[40%] border-gray-200'>
                <AuthenticationComponent />
              </div>
            </div>
          </div>
        ),
        {
          duration: 2000
        }
      )
      const previousLocation = window.history.state?.from
      if (previousLocation) {
        navigate(previousLocation)
      } else {
        navigate('/')
      }
    }
  }, [navigate, user])

  return children
}
