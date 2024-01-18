import { FC, FormEvent, useState } from 'react'
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
      toast.error('Try Again!')
    } finally {
      setLoading(true)
    }
  }
  if (loading) {
    return <Loader />
  }
  return (
    <button
      className='flex w-full items-center justify-center rounded-lg font-julius border-2 border-amber-500 bg-black px-4 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 ease-in-out hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-white shadow-lg'
      type='button'
      onClick={handleSubmit}
    >
      <img
        alt=''
        className='h-8 w-8'
        src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
      />
      {title}
    </button>
  )
}

export default SignInWithGoogleButton
