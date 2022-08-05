import React from 'react'
import TimeInfo from './TimeInfo'

export default function RecipeTimes({recipe, className = 'none'}) {
    return (
        <div className={`${className}full-recipe__section recipe__time-info`}>
            <TimeInfo time={recipe?.recipeTime?.prep} />
            <TimeInfo time={recipe?.recipeTime?.cook} />
            <TimeInfo time={{ name: 'Total', amount: recipe?.recipeTime?.prep?.amount + recipe?.recipeTime?.cook?.amount }} className={'no-border-right'} />
        </div>
    )
}
