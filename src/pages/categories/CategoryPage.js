import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../context/Context'
import RecipeCard from '../../components/recepies/RecipeCard'
import PageSection from '../../components/PageSection'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'

export default function CategoryPage() {
  const { dbReq } = useContext(Context)
  const [category, setCategory] = useState()
  const [categoryRecipes, setCategoryRecipes] = useState()
  const { name } = useParams();

  useEffect(() => {
    if (name){
      dbReq((category) => setCategory(category), 'get', `category-by-key/${name}`)
    } 
  }, [name])

  useEffect(() => {
    if (category) {
      dbReq((recipes) => setCategoryRecipes(recipes), 'get', `recipes-by-category/${category.key}`)
    }
  }, [category])



  return (
    <>
      <Header />
      {categoryRecipes ?
        <PageSection>
          <div className='category-page__container'>
            <h1>{category?.categoryName}</h1>
            {categoryRecipes.map(recipe =>
              <RecipeCard recipe={recipe} key={recipe.id} />
            )}
          </div>
        </PageSection> : <div className='filler' />
      }
    </>
  )
}
