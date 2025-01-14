import Navigation from '@/components/about/navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found allleelele</h2>
        <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
      </div>
    </>
  )
}