'use client'

import { useState } from 'react'
import Navigation from '@/components/about/navigation'

export default function TestError() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('This is a test error!')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navigation />
      <h1 className="text-2xl font-bold mb-4">Test Error Page</h1>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShouldError(true)}
      >
        Trigger Error
      </button>
    </div>
  )
}