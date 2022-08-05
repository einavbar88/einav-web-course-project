import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import MenuListItem from './MenuListItem'

const MobileNavBar = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(Context)

    return (
        isMenuOpen &&
        <>
            <nav className='mobile-navbar__container'>
                <div className='exit-nav'>
                    <p onClick={()=> setIsMenuOpen(false)}>x</p>
                </div>
                <div style={{width: '100%'}} onClick={()=> setIsMenuOpen(false)}>
                    <MenuListItem itemText='Home' itemLink='/' />
                </div>
                <div style={{width: '100%'}} onClick={()=> setIsMenuOpen(false)}>
                    <MenuListItem itemText='All Categories' itemLink='/categories/all' />
                </div>
                <div style={{width: '100%'}} onClick={()=> setIsMenuOpen(false)}>
                    <MenuListItem itemText='Search' itemLink='/recipes/search' />
                </div>
                <div style={{width: '100%'}} onClick={()=> setIsMenuOpen(false)}>
                    <MenuListItem itemText='About' itemLink='/about-us' />
                </div>
            </nav>
            <div className='overlay' onClick={()=> setIsMenuOpen(false)} />
        </>

    )
}

export default MobileNavBar