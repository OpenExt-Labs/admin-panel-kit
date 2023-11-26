'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Logo from './Logo';


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
    path: '/sub-menu',
    label: 'Sub Menu'
  },
  {
    path: '/data-table',
    label: 'Data Table'
  },
  {
    path: '/image-card',
    label: 'Image Card'
  },
  {
    path: '/tabs',
    label: 'Tabs'
  },
]

const Item = ({ path, label, activeTab }: any) => {
  return (
    <div className={`flex items-center justify-between text-gray-600 px-2 py-1 hover:text-gray-800 hover:underline ${activeTab === path ? 'text-black font-bold' : ''}`}>
      <Link href={path}>
        <p className="text-sm">{label}</p>
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
      <div className='flex flex-col w-full'>
        <div className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <div className='flex justify-between items-center container'>
            <Logo />
            <div className=''>
              <a
                className='hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-gray-600 font-bold rounded-l-xl rounded-t-xl transition duration-200'
                href='mailto:support@openext.dev'
              >
                support@openext.dev
              </a>
            </div>
          </div>
        </div>
        <div className='flex container'>
          <div className='w-1/5 p-4'>
            {
              menus.map((item: any) => {
                return <Item key={item.path} path={item.path} label={item.label} activeTab={activeTab} />
              })
            }
          </div>
          <div className='py-6 mx-auto w-full min-w-0 min-h-screen rounded-md'>
            <Tabs defaultValue="demo" className="w-full">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="demo">Demo</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <div className='my-4 flex flex-col space-y-2'>
                <TabsContent value="demo" className='w-full'>
                  <div className='rounded bg-white border border-gray-300 p-4'>
                    {children}
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <div className='rounded bg-white border border-gray-300 p-4'>
                    {
                      `
                      Commoning soon...
                    `
                    }
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}
