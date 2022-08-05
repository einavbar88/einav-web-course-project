import React from 'react'
import Star from './Star'

export default function RecipeScore({stars}) {

    return (
        <div className='recipe-score'>
            <Star fill={stars}/>
            <Star fill={stars - 1} />
            <Star fill={stars - 2} />
            <Star fill={stars - 3} />
            <Star fill={stars - 4} />
        </div>
    )
}
