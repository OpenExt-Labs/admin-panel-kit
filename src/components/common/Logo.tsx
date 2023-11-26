import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='text-gray-600'>
      <Link href='/'>
        <div className='flex w-40 bg-gradient-to-r from-indigo-500'>
          <div className='relative w-full'>
            <Image src='/logo.jpeg' alt='OpenExt logo' fill loading='lazy' />
          </div>
          <span className='text-lg font-bold px-2'>Web Solutions</span>
        </div>
      </Link>
    </div>
  )
}

export default Logo