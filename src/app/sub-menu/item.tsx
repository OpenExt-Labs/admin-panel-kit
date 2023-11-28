'use client'
import React, { use } from 'react'
import { activeMenu, activeMenuItems } from '../recoi-provider'
import { useRecoilState } from 'recoil'
import { MenuItem } from './sub-menu'

const Item = ({ id, path, label }: MenuItem) => {
  const [activeItems, setActiveMenuItems] = useRecoilState(activeMenuItems)
  const [activeMenuItem, setActiveMenuItem] = useRecoilState(activeMenu)
  return (
    <div
      onClick={
        () => {
          console.log('id: ', id)
          setActiveMenuItem(id)
          setActiveMenuItems((activeItems: string[]) => {
            if (activeItems.includes(id)) {
              return activeItems.filter((activeItem: string) => activeItem !== id)
            }
            return [...activeItems, id]
          })
        }
      }
      className={`m-1 items-center p-2 text-gray-900 rounded-lg dark:text-white ${activeMenuItem === id ? 'bg-gray-300' : 'hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer'}`}>
      <span className="text-sm">{label}</span>
    </div>
  )
}
export default Item