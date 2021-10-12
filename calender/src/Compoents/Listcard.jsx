import React, { useEffect, useState } from 'react'
import './Card.css'

const Listcard = () => {
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem('eventdata'))
    var data = data.sort((a, b) => b.Date > a.Date)
    setUserdata(data)
  },[])

  return (
    <>
      {userdata.map(item => {
        return (
          <div className='carddata'>
            <div
              className='card border-success mb-3'
              style={{ maxWidth: '18rem' }}
            >
              <div className='card-header bg-transparent border-success'>
                {item.Title}
              </div>
              <div className='card-footer bg-transparent border-success'>
                {item.Date}
              </div>
              <div className='card-body text-success'>
                <h5 className='card-title'>Description</h5>
                <p className='card-text'>{item.Description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Listcard
