import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import Header from '../../components/header/Header'
import FullRecepie from '../../components/recepies/FullRecipe'

export default function RecipePage() {

  const { dbReq } = useContext(Context)
  const [recipe, setRecipe] = useState()
  const {id} = useParams()
  useEffect(() => {
    if(id) {
      dbReq((r)=> setRecipe(r), 'get', `recipe-by-id/${id}`) 
    }
  }, [id])


  return (
    <>
      <Header />
      {recipe ?
        <FullRecepie recipe={recipe} /> : <div className='filler'/>
      }
    </>
  )
}
