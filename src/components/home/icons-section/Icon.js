import React from 'react'
import { Link } from 'react-router-dom'

export default function Icon({ src, text, href }) {


    return (
        <Link to={'categories/' + href}>
            <li className='floating-icon'>
                <img src={src} alt='icon' style={{width:50, height:50}} />
                <h3>{text}</h3>
            </li>
        </Link>
    )
}
