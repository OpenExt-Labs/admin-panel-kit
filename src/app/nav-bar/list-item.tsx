'use client'

import React from 'react'
import Item from './item'
import { MenuItem } from './sub-menu'
import { activeMenuItems } from '../recoi-provider'
import { RecoilState, useRecoilState } from 'recoil'

function ListItems({ item }: { item: MenuItem }) {

  const [activeItems, setActiveMenuItems] = useRecoilState(activeMenuItems)

  const activeMenuItem = activeItems.find((activeItem: string) => activeItem === item.id)

  return (
    <div className=''>
      <Item id={item.id} path={item.path} label={item.label} />
      <div className='pl-6'>
        {
          activeMenuItem === item.id && item.subItems?.map((item: any) => {
            return (
              <div key={item.path}>
                <Item id={item.id} path={item.path} label={item.label} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListItems
