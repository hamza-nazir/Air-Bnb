'use client'
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import DialogBox from "./DialogBox";
import { reviewAction } from "@/hooks/ServerAction";
import { useSession } from "next-auth/react";

const ReviewsForm = ({listingId}) => {
     const [online,setIsOnline]=useState(false);
 
 const { data: session } = useSession();
const [open,setOpen]=useState(false)

  const [rating, setRating] = useState(0);
const [comment,setComment]=useState("");
   
      useEffect(()=>{
        if(navigator.onLine==true){
          setIsOnline(true)
        }else{
          setIsOnline(false)
        }
      },[])
      

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("rating", rating);
    formData.append("listingId", listingId);
    const result=await reviewAction(formData);
    console.log(result);
   
  
  }


  const popupFun=(e)=>{
    e.preventDefault();
    setOpen(true);
  }
  
  return (
    <>
 <div className="conatiner ">
   <h2 className='pt-lg-2 pb-lg-2'>Leave a Reviews</h2>
   <form onSubmit={handleSubmit} className='border  p-2'>
      <input type="text" className="form-control mt-3 " onChange={(e)=>setComment(e.target.value)} name="comment" placeholder='Enter your Comments' />
      <input type="text" className="form-control mt-3" id="" placeholder='Your Phone Number (Optional)' />

      <input type="text" className="form-control mt-3" id="" placeholder='Your Email (Optional) ' />
      <div className="rounded-2 mt-3 text-center ">

<Rating  onClick={(rate)=>{setRating(rate)}} fillColor="black" />
      </div>
<div className="text-center mt-3">

  {session==undefined&&(
<button disabled={!rating||!comment} onClick={popupFun} className='btn btn-primary'>Submit</button>

  )}
    {session?.user&&(
<div>
<button disabled={!rating||!comment||!online} className='btn btn-primary'>Submit</button>
{!online&&(<div className="text-danger">Make sure you have internet connection</div>)}
</div>
  )}

</div>
   </form>
</div>

<DialogBox open={open} setOpen={setOpen}/>




       
   </>
  )
}

export default ReviewsForm