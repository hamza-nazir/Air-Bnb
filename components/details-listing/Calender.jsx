'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // <- make sure you import default styles

const MyCalendar = () => {
  const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState();

  return (
    <div className='row mt-5 '>
<div className="col">
  <div className='offset-2'>
   <h2 className='fw-light'>From</h2>
      <Calendar className='rounded'  onChange={setFrom} value={from} />

  </div>
</div>
<div className="col">
  <div className='offset-2'>
   <h2 className='fw-light'>To</h2>
      <Calendar className='rounded text-black' onChange={setTo} value={to} />

  </div>
</div>
    </div>
  )
}

export default MyCalendar;
