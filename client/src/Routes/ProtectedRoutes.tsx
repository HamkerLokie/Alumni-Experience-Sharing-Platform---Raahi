import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

type ProtectedRoutesProps = PropsWithChildren

export default function ProtectedRoutes ({ children }: ProtectedRoutesProps) {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      toast.error('Login Required')
      navigate('/', { replace: true })
    }
  }, [navigate, user])

  return children
}
