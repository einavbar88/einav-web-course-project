import React from 'react'

export default function TimeInfo({time, className}) {

  return (
    <div className={`time-info ${className}`}>
      <h4>{time?.name} Time</h4>
      <p>{time?.amount} Min</p>
    </div>
  )
}
