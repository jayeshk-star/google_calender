import React, { useContext, useEffect, useState } from 'react'
import './Card.css'

const Listcard = props => {
  console.log(props)
  return (
    <>
      <div className='carddata'>
        <div className='card border-success mb-3' style={{ maxWidth: '18rem' }}>
          <div className='card-header bg-transparent border-success'>
            {props.Data.Title}
          </div>

          <div className='card-body text-success'>
            <h className='card-title'>Description</h>
            <p className='card-text'>{props.Data.Description}</p>
          </div>
          <div className='card-footer bg-transparent border-success'>
            {props.Data.Date}
          </div>
        </div>
      </div>
      )
    </>
  )
}

export default Listcard
