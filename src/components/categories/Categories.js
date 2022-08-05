import React from 'react'
import PageSection from '../PageSection'
import CategoryCard from './CategoryCard'


export default function Categories({categories}) {

    return (
        <PageSection>
            <div className='categories-list__container'>
                {
                    categories && categories.map((category)=> <CategoryCard {...category} />)
                }
            </div>
        </PageSection>
    )
}
