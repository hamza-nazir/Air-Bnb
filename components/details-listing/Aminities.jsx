import React from 'react'
import {FaCheck} from 'react-icons/fa'
const Aminities = ({amenities}) => {
  // console.log(amenities)
  return (
   <div>
    <hr />
    <h2 className='ms-2 fw-light'>What this place offers</h2>
    <div className="row">
      {amenities.map((amenity,index)=>(
     
        <div key={index} className="ms-4 border rounded-2 p-2 mb-2 col-lg-5 col-md-12 col-sm-12 me-4"> <FaCheck className='d-inline me-2'/> {amenity}</div>

        ))}
    </div>
   </div>
  )
}

export default Aminities