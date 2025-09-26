'use client'
import { useEffect,useState } from "react"
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
const Reservation = ({id}) => {
  const router=useRouter()
  const[isCheck,setIsCheck]=useState(false)
  useEffect(()=>{
     api.get(`/featured/${id}`)
     .then((res)=>{
      if(res.data?.exists?._id){
        setIsCheck(true)
      }else{
        setIsCheck(false)
      }
     })
  },[])

    const click=()=>{
    setIsCheck(true)
    if(isCheck==false){
      api.post(`/featured/${id}`)
      router.refresh('/')
      console.log("JEO")
    }
    else{
     api.delete(`/featured/${id}`)
     .then((res)=>{
      setIsCheck(false);
      router.refresh('/')

     })
    }

  }


 

  return (
    <div className='container '>
      <div className="mx-auto text-sm-center text-lg-start"><span className='fw-bold '>$320</span> for 4 nights</div>
      <form className="mx-auto text-sm-center text-lg-start" >
        <label style={{cursor:'pointer'}} htmlFor="defaultCheck1" className="fw-bold me-2 text-muted">Mark as Featured</label>
      <input
      checked={isCheck}
        type="checkbox"
        id="defaultCheck1"
        name="featured"
        className="form-check-input  d-inline"
      onChange={click}
      />
      </form>

    </div>
  )
}

export default Reservation
