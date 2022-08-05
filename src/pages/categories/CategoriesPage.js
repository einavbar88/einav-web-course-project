import React, { useContext, useEffect, useState } from 'react'
import Categories from '../../components/categories/Categories'
import Header from '../../components/header/Header'
import { Context } from '../../context/Context'

export default function CategoriesPage() {

    const { dbReq } = useContext(Context)
    const [categories, setCategories] = useState()

    useEffect(() => {
        dbReq((c) => setCategories(c), 'get', 'categories')
    }, [])


    return (
        <>
            <Header />
            <Categories categories={categories} />
        </>
    )

}
