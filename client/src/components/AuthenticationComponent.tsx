import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import SignInWithGoogleButton from '../ui/SignInWithGoogleButton'
import { useState } from 'react'
import Loader from '../ui/Loader'

const AuthenticationComponent = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  function handleLogOut () {
    try {
      setLoading(true)
      logout()
      toast.success('Logout Successful')
      navigate('/')
    } catch (error) {
      toast.error('Try Again!!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=''>
      {loading && <Loader />}
      {user !== null ? (
        <>
          <div className='logout-btn flex bg-black text-white px-3 font-prompt items-center justify-between border-2 border-amber-500 tracking-wider rounded-full '>
            <button
              className='peer mx-2 grid h-20 w-20  place-content-center overflow-hidden rounded-full  xl:h-10 xl:w-10 '
              title={user?.displayName!}
              type='button'
            >
              {user?.photoURL ? (
                <img
                  alt=''
                  className='h-full w-full object-cover rounded-full'
                  src={user.photoURL}
                />
              ) : (
                <span className='material-symbols-outlined text-3xl text-black xl:text-4xl'>
                  account_circle
                </span>
              )}
            </button>

            <div className=''>
              <button className=' font-josefin' onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <SignInWithGoogleButton title='Sign In With Google' />
        </>
      )}
    </div>
  )
}

export default AuthenticationComponent
