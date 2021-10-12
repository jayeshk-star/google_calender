import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calender.css'

const Calender = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <div className='calenderbody'>
        <Calendar
          onChange={onChange}
          value={value}
          className='calenderContain'
        />
      </div>
      <div className='calendertodo'>
        <div className='form'>
          <div class='form-group'>
            <label for='exampleFormControlInput1'>Title</label>
            <input
              type='text'
              class='form-control'
              id='exampleFormControlInput1'
              placeholder='title'
            />
            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>Description</label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='4'
              ></textarea>
            </div>
            <button type='button' class='btn btn-primary btn-lg btn-block'>
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calender
