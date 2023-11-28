'use client'

import Link from 'next/link'
import React from 'react'
import Item from './item'
import ListItems from './list-item'


const menu = [
  {
    id: 'menu-1',
    path: '/menu-1',
    label: 'Menu 1',
    subItems: [
      {
        id: 'menu-1-1',
        path: '/menu-1-1',
        label: 'Menu 1-1'
      },
      {
        id: 'menu-1-2',
        path: '/menu-1-2',
        label: 'Menu 1-2'
      },
    ]
  },
  {
    id: 'menu-2',
    path: '/menu-2',
    label: 'Menu 2',
    subItems: [
      {
        id: 'menu-2-1',
        path: '/menu-2-1',
        label: 'Menu 2-1'
      },
      {
        id: 'menu-2-2',
        path: '/menu-2-2',
        label: 'Menu 2-2'
      },
      {
        id: 'menu-2-3',
        path: '/menu-2-3',
        label: 'Menu 2-3'
      }
    ]
  },
  {
    id: 'menu-3',
    path: '/menu-3',
    label: 'Menu 3',
    subItems: []
  }
]

export type MenuItem = {
  id: string
  path: string
  label: string
  subItems?: MenuItem[]
}


function SubMenu() {
  return (
    <aside className=' rounded-md shadow-sm bg-gray-50 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
      <div className='h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800'>
        {
          menu.map((item: any) => {
            if (item.subItems.length > 0) {
              return <ListItems key={item.id} item={item} />
            }
            return (
              <div key={item.path}>
                <Item id={item.id} path={item.path} label={item.label} />
              </div>
            )
          })
        }
      </div>
    </aside>
  )
}

export default SubMenu