import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='text-gray-600 py-2'>
      <Link href='/' className=''>
        <div className='flex h-14 w-40 justify-center relative'>
          <Image src='/logo9.svg' alt='OpenExt logo' fill loading='lazy' />
        </div>
      </Link>
    </div>
  )
}

export default Logo