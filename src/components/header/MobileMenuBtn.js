import React, { useContext } from 'react'
import { Context } from '../../context/Context'

const MobileMenuBtn = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(Context)

    return (
        <div className='mobile-nav__btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className='mobile-nav__btn-line' />
            <div className='mobile-nav__btn-line' />
            <div className='mobile-nav__btn-line' />
        </div>
    )
}

export default MobileMenuBtn