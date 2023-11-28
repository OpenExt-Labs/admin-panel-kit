import React from 'react'
import SubMenu from './sub-menu'
import CodeFragment from '@/components/common/code'

export default function NavBarPage() {
  return (
    <>
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">NavBar</h1>
        <h2 className='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>Installation</h2>

        <h3 className='font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>Recoil</h3>
        <p className='mt-4 scroll-m-20'>
          Recoil is an experimental state management library for React apps.
          It use for managing active menu items stage.
        </p>
        <CodeFragment code={`yarn add recoil`} />
      </div>

      <div className='my-6'>
        <h2 className='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>Demo</h2>
        <div className='my-6 border rounded-md'>
          <SubMenu />
        </div>
      </div>
    </>
  )
}
