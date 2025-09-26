
import React from "react";
import ReviewsForm from "./ReviewsForm";
import ShowCommentRating from "./ShowCommentRating";
import User from "@/models/User";
import Reviews from "@/models/Reviews";
import SeeComments from "./SeeComments";
const ReviewsComp =async ({ listingId }) => {

  
let reviews=await Reviews.find({listingId}).populate('owner').sort({ createdAt: -1 }).limit(4).lean()

  return (
    <div className="row">
      <div className=" col-md-7 col-lg-8 col-sm-12">

   <div className="container  my-lg-5 my-sm-2">
      <h2 className="mb-4 text-center mt-sm-2">Customer Reviews</h2>
      <div className="row">


{reviews.length==0?(
  <div className="border rounded-2 text-muted "><h1  className="fw-light">No comments yet, <br /> be the first to comment</h1></div>
):(
<div className="row">


{  
  reviews?.map((review, index) => (
  
          <div key={index} className="col-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div> <img style={{height:'34px',width:'34px',borderRadius:'50%'}} src={review.owner.image}  />  {review.owner.username}</div>

                <div className="card-text ">{review.comments}</div>
               <div className="d-flex  justify-content-between align-items-center">
                <div className="d-none d-lg-block"><ShowCommentRating rating={review.rating}/></div>
                <div style={{fontSize:'12px'}} className="card-subtitle text-muted ">  {new Date(review.createdAt).toDateString()}</div>
               </div>

              </div>
            </div>
         
          </div>
           
        ))
} 

{
  reviews.length==4&&(
<SeeComments/> 

  )
}
</div>
)}


      
      </div>
    </div>
      </div>

      <div className="col-md-5 col-lg-4 col-sm-12">
          <div className="container my-lg-5">
            <ReviewsForm listingId={listingId}/>
          </div>

      </div>

    </div>
 
  );
};

export default ReviewsComp;



// import React from 'react'

// const Reviews =async ({ listingId }) => {
//   console.log(listingId)
//   return (
//     <div>Reviews</div>
//   )
// }

// export default Reviews