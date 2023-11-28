import React from 'react'
import SubMenu from './sub-menu'

export default function SubMenuPage() {
  return (
    <>
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Sidebar</h1>
      </div>
      <div className='my-6'>
        <h2 className='font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0'>Demo</h2>
        <SubMenu />
      </div>
    </>
  )
}
