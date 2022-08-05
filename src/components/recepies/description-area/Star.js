import React, { useState, useEffect } from 'react'

export default function Star({fill}) {

    const [starFilling, setStarFilling] = useState()

    useEffect(() => {
      if(fill >= 0.75){
          setStarFilling(1)
      }else if(fill >= 0.25){
          setStarFilling(0.5)
      }else {
        setStarFilling(0)
      }
    }, [])
    

  return (
    <div className='star'>
        <div className={`star__filling ${starFilling === 1 ? 'full-star' : starFilling === 0.5 ? 'half-star' : ''}`} />
    </div>
  )
}
