import React from 'react'
import PageSection from '../PageSection'
import DescriptionArea from './description-area/DescriptionArea'
import Ingredients from './instructions-area/Ingredients'
import Instructions from './instructions-area/Instructions'

export default function FullRecepie({recipe}) {
    return (
        <PageSection id="full-recipe__container">
            <div className='full-recipe'>
                <DescriptionArea recipe={recipe}/>
                <Ingredients ingredients={recipe?.ingredients}/>
                <Instructions instructions={recipe?.instructions}/>
            </div>
        </PageSection>
    )
}
