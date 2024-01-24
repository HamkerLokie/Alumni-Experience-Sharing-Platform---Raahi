import { FC, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import Loader from './Loader'

interface GoogleButtonProps {
  title: string
}

const SignInWithGoogleButton: FC<GoogleButtonProps> = ({ title }) => {
  const { signInWithGoogle } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async () => {
    try {
      setLoading(true)
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      toast.error('Try Again!')
    } finally {
      setLoading(true)
    }
  }

  return (
    <button
      className='flex w-full items-center justify-between rounded-full font-julius border-2 border-amber-500 bg-black px-3 py-3 text-[0.6rem] font-bold uppercase tracking-wider text-white transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-white shadow-lg'
      type='button'
      onClick={handleSubmit}
    >
      {loading && <Loader />}
      <img
        alt=''
        className='h-5 w-5'
        src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
      />

      {title}
    </button>
  )
}

export default SignInWithGoogleButton
