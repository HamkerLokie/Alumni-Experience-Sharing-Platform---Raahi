import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

interface ApiError {
  status?: number
  message?: string
  data?: any
}

const useApiError = () => {
  const [error, setError] = useState<ApiError | null>(null)

  const clearError = () => {
    setError(null)
  }

  const handleApiError = (error: any) => {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        status: error.response?.status,
        message: error.response?.data?.message,
        data: error.response?.data
      }
      setError(apiError)
      if (apiError.message) {
        toast.error(apiError.message)
      }
    } else {
      const apiError: ApiError = {
        message: error.message || 'Unknown error'
      }
      setError(apiError)
    }
  }

  useEffect(() => {
    return () => {
      clearError()
    }
  }, [])

  return { error, clearError, handleApiError }
}

export default useApiError
