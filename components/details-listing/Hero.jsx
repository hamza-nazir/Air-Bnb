// 'use client'
import Image from "next/image"
import {FaBed,FaBath} from 'react-icons/fa'
import Saved from "./Saved"
const Hero = ({indivListing}) => {

  return (
        <div>
   
      <Saved indivListing={JSON.stringify(indivListing)}/>
   <div className="row " > 
  <div className="col-lg-5 col-md-7 ">
   <div className=' position-relative ' style={{height:'320px'}}>
      <Image priority src={indivListing?.images[0]} fill className="rounded-4 mt-2 object-cover" alt="image" sizes="100%"/>
   </div>
  </div>

  <div className="d-none d-md-block d-lg-block col">
    <div className="row g-2"  > 
      <div className="col  me-2 position-relative " style={{height:'160px'}}>
      <Image className="rounded-4 object-cover" src={indivListing?.images[1]} fill alt="image"  sizes="100%"/>

      </div>
      <div className="col   position-relative" style={{height:'160px'}}>
      <Image className="rounded-4 object-cover" src={indivListing?.images[2]} fill alt="image"  sizes="100%"/>

      </div>

    </div>    
    <div className="row g-2 mt-1" style={{height:'165px'}}>
       <div className="col  me-2 position-relative" style={{height:'160px'}}>
      <Image className="rounded-4 object-cover " src={indivListing?.images[3]} fill alt="image"  sizes="100%"/>

      </div>
        <div className="col   position-relative" style={{height:'160px'}}>
      <Image className="rounded-4 object-contain" src={indivListing?.images[4]} fill alt="image"  sizes="100%"/>

      </div>
    </div>
  </div>
</div>

<div  className="mt-2"><b className="fw-semibold" >{indivListing.description}</b></div>
<div className="mt-2"> <FaBed/> {indivListing.beds} beds . <FaBath/> {indivListing.baths} baths</div>
    </div>
  )
}

export default Hero