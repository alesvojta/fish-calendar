import { useEffect, useState } from 'preact/hooks'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    try {
      setLoading(true)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (mounted) {
            setData(data)
            setLoading(false)
          }
        })
    } catch (e) {
      if (mounted) setError(e)
    } finally {
      if (mounted) setLoading(false)
    }
    return () => {
      mounted = false
    }
  }, [url])

  return { data, error, loading }
}
