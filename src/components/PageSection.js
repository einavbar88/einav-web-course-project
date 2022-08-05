import React, { useEffect, useState } from 'react'

export default function PageSection(props) {
  const [className, setClassName] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if (props.className)
      setClassName(props.className)
    if (props.id) 
    setId(props.id)
  }, [])


  return (
    <div id={id} className={`page-section ${className}`}>
      {props.children}
    </div>
  )
}
