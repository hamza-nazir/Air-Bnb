'use client'
import { useParams } from 'next/navigation'
import { useRef } from 'react';
import React,{useState,useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import api from '@/lib/axios';
const SeeComments = () => {
  const router=useRouter();
  const [page,setPage]=useState(1)
  const div=useRef()
  const [reviews,setReviews]=useState([])
  const [isOpen,setIsOpen]=useState(false)
  const {id}=useParams();
  const [limit,setLimit]=useState(false)

useEffect(()=>{
  if(limit) return ;
api.get(`/reviews/${page}/${id}`)
.then((res)=>{
    setReviews((prev)=>[...prev,...res.data])
    router.refresh();
     if (res.data.length === 0) setLimit(true);
})
},[page])


const scrollingFun=()=>{
if(div?.current.clientHeight+div?.current.scrollTop+1>div.current?.scrollHeight){
  setPage(page+1)        
}

}

  return (
    <div>

    <div style={{cursor:'pointer'}} className="text-end fw-bold" onClick={()=>setIsOpen(true)}>see more</div>   
  <Dialog open={isOpen} maxWidth="sm"  fullWidth>
   <DialogTitle>

       <IconButton onClick={()=>setIsOpen(false)} aria-label="close" sx={{position: 'absolute',right: 8,  top:1,'&::-webkit-scrollbar': { display: 'none' },}}>
          <CloseIcon />
        </IconButton>
        <div><h2>All Reviews</h2></div>
      </DialogTitle>
      <DialogContent ref={div} onScroll={scrollingFun}  dividers>
       {
        reviews?.map((review,index)=>(
          <div className='border p-2 mb-2 rounded-2' key={index}>
            <div className="row">
            <div className="col-lg-1 col-md-1 me-2">
              <img src={review.owner.image} style={{height:'30px',width:'30px',borderRadius:'50%'}} />
            </div>
              <div className="col-lg-7 col-md-4 fw-bold">{review.owner.username}</div>
              <div className="col d-none d-lg-block">{new Date(review.createdAt).toDateString()}</div>
            </div>
            
            <div>{review.comments}</div>
            <div></div>
          </div>
        ))
       }
      </DialogContent>
    </Dialog>

    </div>
  )
}
 
export default SeeComments