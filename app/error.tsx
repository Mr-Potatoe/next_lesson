'use client'

import { useEffect } from 'react'
import Navigation from '@/components/about/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navigation />
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}