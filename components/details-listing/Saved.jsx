'use client'
import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import DialogBox from './DialogBox';
import { savedAction,savedExist,DelAction } from '@/hooks/ServerAction';
import {FaArrowLeft} from 'react-icons/fa'
import { useRouter } from 'next/navigation';
const Saved = ({indivListing}) => {
const router=useRouter()
   const [open,setOpen]=useState(false)
   const [exist,setExist]=useState(false);
   const {data:session}=useSession();
  indivListing= JSON.parse(indivListing);


  useEffect(()=>{
     const data={
      sessionId:session?.user.id,
      listingID:indivListing._id
   }
   savedExist(data)
   .then((res)=>{
      if(res?.success){
         setExist(true)
      }else if(!res?.success){
         setExist(false)
      }
   })
  },[exist])

const submit=async ()=>{
   const data={
      sessionId:session.user.id,
      listingID:indivListing._id
   }
   if(!exist){
       await savedAction(data)
  .then((res)=>{
   if(res.success==true){setExist(true)} 
   })
   }else{
      await DelAction(data)
      .then((res)=>{
         if(res.success===true){
            setExist(false)
         }
      })
   }
 
}
  return (
    <div className="d-flex justify-content-between w-100">
      <div ><span onClick={()=>router.back()} style={{cursor:'pointer'}}><FaArrowLeft className='me-3 mb-2' /></span><h3 className='d-inline'><span>{indivListing?.name} </span><span className='ms-2 text-muted fw-light'>({indivListing?.type})</span></h3></div>


      {!exist&&(

     session?(
         
        <div style={{cursor:'pointer'}}  onClick={submit} className="d-flex align-items-center ">  <FontAwesomeIcon className='me-1' icon={faHeart} /> Save</div>
      ):(
        <div style={{cursor:'pointer'}}  onClick={()=>setOpen(true)} className="d-flex align-items-center ">  <FontAwesomeIcon className='me-1' icon={faHeart} /> Save</div>

      )
     
      )}
      {exist&&(
      <div style={{cursor:'pointer'}}  onClick={submit}  className="d-flex align-items-center "> <FontAwesomeIcon className='me-1 ' icon={faSolidHeart} style={{color:'red'}} /> Saved</div>

      )}
      <DialogBox open={open} setOpen={setOpen}/>
      </div> 
  )
}

export default Saved