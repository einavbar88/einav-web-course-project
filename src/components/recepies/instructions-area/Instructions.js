import React from 'react'

export default function Instructions({instructions}) {
  return (
    <div className='full-recipe__section'>
      <h1>INSTRUCTIONS</h1>
      <ul className='instructions'>
          {instructions?.map(step => <li key={step}>{step}</li>)}
      </ul>

    </div>
  )
}
