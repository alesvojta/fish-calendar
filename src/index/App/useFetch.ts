import { useEffect, useState } from 'preact/hooks'

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    try {
      fetch(url)
        .then(r => r.json())
        .then(response => {
          setData(response)
          setIsLoading(false)
        })
    } catch (e) {
      setError(e)
      setIsLoading(false)
      console.log(e)
    }
  }, [url])

  return { isLoading, data, error }
}
