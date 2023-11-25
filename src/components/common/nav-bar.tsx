'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'


const menus = [
  {
    path: '/form',
    label: 'Form'
  },
  {
    path: '/upload',
    label: 'Upload'
  },
  {
    path: '/crop-image',
    label: 'Crop Image'
  },
  {
    path: '/data-table',
    label: 'Data Table'
  },
  {
    path: '/image-card',
    label: 'Image Card'
  },
]

const Item = ({ path, label, activeTab }: any) => {
  return (
    <div className={`p-3 py-4 flex items-center justify-between text-coolGray-500 
    hover:text-green-400 hover:bg-white hover:shadow-sm rounded-md
    ${activeTab === path ? 'text-green-400' : ''}`}>
      <Link href={path}>
        <p className="text-lg font-medium">{label}</p>
      </Link>
    </div>
  )
}

export default function Navbar({ children }: any) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('/')

  useEffect(() => {
    const currentPath = pathname.split('/')[1]
    setActiveTab(`/${currentPath}`)
  }, [pathname])


  return (
    <React.Fragment>
      <div className='flex w-full h-screen bg-slate-50 fixed'>
        <div className='w-1/5 p-4 border-r shadow-md'>
          {
            menus.map((item: any) => {
              return <Item key={item.path} path={item.path} label={item.label} activeTab={activeTab} />
            })
          }
        </div>
        <div className='p-4 w-full h-full rounded-md overflow-auto'>
          {children}
        </div>
      </div>
    </React.Fragment >
  );
}
