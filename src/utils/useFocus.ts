import { useEffect, useRef } from 'react'

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log('child onMount')
    ref.current?.focus()
  }, [])

  return ref
}
