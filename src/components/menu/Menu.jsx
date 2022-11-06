import React from 'react'
import { menuData } from './initialData'


const Menu = () => (
  <>
    {
      menuData.map(item =>
        <p key={item.id}>
          <a href={item.href}>{item.name}</a>
        </p>
      )
    }
  </>
)


export default Menu
