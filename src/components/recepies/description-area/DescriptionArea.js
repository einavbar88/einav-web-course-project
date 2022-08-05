import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/Context'
import RecipeTimes from '../RecipeTimes'
import RecipeInfo from './RecipeInfo'
import RecipeScore from './RecipeScore'

export default function DescriptionArea({recipe}) {

    const { location } = useContext(Context)
    const [className, setClassName] = useState('')

    useEffect(() => {
        if (location.pathname.includes('recipe')) {
            setClassName('full-recipe__section ')
        }
    }, [])


    return (
        <>
            <div className={`${className}recipe__description-area`}>
                <div className='recipe-description__left'>
                    <h1>{recipe?.title}</h1>
                    <p>{recipe?.subTitle}</p>
                    <div style={{width: '100%'}}>
                        <RecipeScore stars={recipe.recipeScore }/>
                        <RecipeInfo servings={recipe.servings} calories={recipe.calories} difficulty={recipe.difficulty}/>
                    </div>
                </div>
                <div className='recipe-description__right'>
                    <img src={recipe?.mainImage} alt='recipe'/>
                </div>

            </div>
             <RecipeTimes recipe={recipe} className={className} />
        </>
    )
}
