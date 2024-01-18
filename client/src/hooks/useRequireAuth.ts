import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useRequireAuth = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      toast.error('Login Required!!')
      navigate('/')
    }
  }, [user, navigate])
}

export default useRequireAuth
