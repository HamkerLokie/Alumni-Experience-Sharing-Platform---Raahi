import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface ApiSuccess {
  statusCode?: number
  message?: string
  isSuccess?: boolean
}

const useApiSuccess = () => {
  const [success, setSuccess] = useState<ApiSuccess | null>(null)

  const clearSuccess = () => {
    setSuccess(null)
  }

  const handleApiSuccess = (success: any) => {
    const apiSuccess: ApiSuccess = {
      statusCode: success?.status,
      message: success?.message,
      isSuccess: success?.success
    }
    setSuccess(apiSuccess)
    if (apiSuccess.message) {
      toast.success(apiSuccess.message)
    }
  }

  useEffect(() => {
    return () => {
      clearSuccess()
    }
  })

  return { success, clearSuccess, handleApiSuccess }
}

export default useApiSuccess
