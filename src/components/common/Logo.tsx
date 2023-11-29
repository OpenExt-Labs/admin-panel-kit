import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='text-gray-600 py-2'>
      <Link href='/'>
        <div className='flex'>
          <div className=''>
            <Image src='/logo6.svg' alt='OpenExt logo' width={80} height={80} loading='lazy' />
          </div>
          {/* <span className='text-lg font-serif font-semibold my-auto' style={{ color: '#1A7F75' }}>OpenExt</span> */}
        </div>
      </Link>
    </div>
  )
}

export default Logo