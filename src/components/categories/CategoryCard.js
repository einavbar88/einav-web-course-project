import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ imgSrc, categoryName, href }) {
    return (
        <Link to={'../categories/' + href}>
            <div className='category-card__container'>
                <div className='category-card__img'>
                    <img src={imgSrc} alt='category' />
                </div>
                <div className='category__info'>
                    <h3>{categoryName}</h3>
                </div>
            </div>
        </Link>
    )
}
