import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calender.css'
import '../App.css'
import Listcard from './Listcard'

const getstatedata = () => {
  var list = localStorage.getItem('eventdata')
  if (list) {
    return JSON.parse(localStorage.getItem('eventdata'))
  } else {
    return []
  }
}
const Calender = () => {
  const [date, setDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [Data, setData] = useState(getstatedata())

  useEffect(() => {
    localStorage.setItem('eventdata', JSON.stringify(Data))
  }, [Data])

  const handlesubmit = () => {
    var fullDay = date.getDate()
    var month = date.getMonth()
    var Year = date.getFullYear()
    var fullday = fullDay + '/' + month + '/' + Year
    const Eventdata = {
      Date: fullday,
      Title: title,
      Description: desc
    }
    setData([...Data, Eventdata])
    setTitle('')
    setDesc('')
  }

  return (
    <>
      <div className='calender_contain'>
        <div className='calenderbody'>
          <Calendar
            onChange={setDate}
            value={date}
            className='calenderContain'
          />
        </div>
        <div className='calendertodo'>
          <div className='form'>
            <div className='form-group'>
              <label>Title</label>
              <input
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='title'
              />
              <div className='form-group'>
                <label>Description</label>
                <textarea
                  onChange={e => setDesc(e.target.value)}
                  value={desc}
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='4'
                ></textarea>
              </div>
              <button
                type='button'
                className='btn btn-primary btn-lg btn-block'
                onClick={handlesubmit}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='Todo_contain'>
        {Data.map(item => {
          return <Listcard Data={item} />
        })}
      </div>
    </>
  )
}

export default Calender
