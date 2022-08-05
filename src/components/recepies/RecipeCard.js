import React from 'react'
import { Link } from 'react-router-dom'
import RecipeInfo from './description-area/RecipeInfo'
import RecipeScore from './description-area/RecipeScore'
import RecipeTimes from './RecipeTimes'

export default function RecipeCard({ recipe }) {

  const { mainImage, title, subTitle, servings, calories, recipeScore, difficulty, id } = recipe

  return (
    <Link to={'/recipes/' + id}>
      <div className='recipe-card__container'>
        <div className='recipe-card__image'>
          <img src={mainImage} alt="recipe-card" /> 
        </div>
        <div className='recipe-card__titles'>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className='recipe-card__info'>
          <div>
            <RecipeTimes recipe={recipe} />
          </div>
          <div className='card-info__rest'>
            <RecipeInfo servings={servings} calories={calories} difficulty={difficulty} />
          </div>
          <RecipeScore stars={recipeScore} />
        </div>
      </div>
    </Link>
  )
}
