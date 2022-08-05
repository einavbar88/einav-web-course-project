import React from 'react'

export default function RecipeInfo({servings, calories, difficulty}) {
    return (
        <div className='recipe-info'>
            <p>SERVINGS <span>{servings} servings</span></p>
            <p>CALORIES <span>{calories} calories</span></p>
            <p>DIFFICULTY <span> {difficulty}</span></p>
        </div>
    )
}
