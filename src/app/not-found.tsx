import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-medium'>Page not found</h1>
        <Link href="/">
          <p className='text-xl text-green-500 hover:underline cursor-pointer'>Go back home</p>
        </Link>
      </div>
    </div>
  )
}