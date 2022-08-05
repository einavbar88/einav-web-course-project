import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

const MenuListItem = ({ itemText, itemLink }) => {

  const { location } = useContext(Context)

  return (
    <span className='menu-list__item-container'>
      <Link to={itemLink}>
        <p className={'menu-list__item' + (location.pathname === itemLink? ' active' : '') }>
          {itemText}
        </p>
      </Link>
    </span>
  )
}

export default MenuListItem