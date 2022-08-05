import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import PageSection from '../PageSection'
import RecipeCard from '../recepies/RecipeCard'

export default function RandomRecipe() {

    const { dbReq } = useContext(Context)

    const [recipe, setRecipe] = useState()

    useEffect(() => {
        dbReq((r)=> setRecipe(r), 'get', `random-recipe`)
    }, [])


    return (
        <PageSection>
            <div className='colored-section'>
                <h1 className='beatiful-font'>Recipe of the Day</h1>
                <div className='random-recipe__container'>
                    {recipe &&
                        <RecipeCard recipe={recipe} />
                    }
                </div>
            </div>
        </PageSection>
    )
}
