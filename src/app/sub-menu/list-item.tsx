import React from 'react'
import Item from './item'

function ListItems({ items }: { items: any }) {
  return (
    <div>
      {
        items.map((item: any) => {
          return (
            <div key={item.path}>
              <Item path={item.path} label={item.label} />
              {
                item.subItems.length > 0 &&
                <ListItems items={item.subItems} />
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default ListItems