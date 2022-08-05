import React from 'react'

export default function Ingredients({ingredients}) {

  return (
    <div className='full-recipe__section'>
        <h1>INGREDIENTS</h1>
        <ul className='ingredients'>
          {ingredients?.map((item => <li key={item.ingredient}>
              {item.ingredient} <span>{item.comment}</span>
          </li>))}
        </ul>
    </div>
  )
}
