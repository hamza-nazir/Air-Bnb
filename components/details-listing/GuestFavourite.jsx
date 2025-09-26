import React from 'react'
import {FaStar} from 'react-icons/fa'
import Reservation from './Reservation'
import { Suspense } from 'react'
import ShowCommentRating from './ShowCommentRating'
import Reviews from '@/models/Reviews'
const GuestFavourite =async ({indivListing}) => {

 const totalreviews = await Reviews.countDocuments({ listingId: indivListing._id });
 const rating=await Reviews.find({listingId: indivListing._id},  { rating: 1, _id: 0 })
const ratingSum=rating.reduce((acc,item)=>acc+item.rating,0);
const average=(ratingSum/totalreviews)
// console.log(average)
  return (
    <div>

      <div className="row mt-4">
        <div className="col-lg-8 col-md-12 col-sm-12  border border-dark rounded-3 p-4">

        
            <div className="row ">
              <div className="d-none d-lg-block col-lg-2 col-4 text-center fw-semibold">   Guest <br /> favoutire</div>
              <div className="d-none d-lg-block col-lg-3 text-center">Lorem ipsum dolor, sit amet consectetur  </div>

              {average>0?(
                
                <div className="col-lg-5 col col-md-7 col-sm-6 text-center border-end border-dark"><span className='fw-semibold'>Rating {(ratingSum/totalreviews).toFixed(2)}</span>  <br /><ShowCommentRating className='d-none d-lg-block' rating={ratingSum/totalreviews}/></div>
              ):(
                <div className="col-lg-5 col col-md-7 col-sm-6 text-center border-end border-dark d-flex justify-content-center align-items-center "><span className='fw-semibold'>0 Rating</span>  <br /></div>
               
              )
              }
              
              
               <div className="col-lg-2 col-md-5 col-sm-6 col text-center d-flex align-items-center justify-content-center "><span className='fw-semibold me-2'>{totalreviews}</span> Reviews </div>
            </div>
         
        </div>

      <div className="col-1 d-lg-block d-none"></div>
  
        <div className="col-lg-3 col-md-12 col-sm-12 shadow rounded-3  p-4 mt-sm-2">
        
       <Suspense fallback={<div>Loading reservation...</div>}>
  <Reservation id={indivListing._id.toString()} />
</Suspense>
        </div>
      </div>
    </div>
  )
}

export default GuestFavourite