import { useState, useEffect } from 'react'
import axios from '../axios'
import { Article } from '../defs/defs'

const useFetchData = (url: string) => {
  const [data, setData] = useState<Article[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  interface ResponseData {
    statusCode: number
    data: Article[]
    message: string
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ResponseData>(url)
        setData(response.data.data)
      } catch (error) {
        console.log(error)
        // setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {}
  }, [url])

  return { data, loading, error }
}

export default useFetchData
