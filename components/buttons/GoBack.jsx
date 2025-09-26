'use client'
import { useRouter } from 'next/navigation'
const GoBack = () => {
const router=useRouter()
  return (
   <button className="btn btn-primary" onClick={()=>router.back()}>Go Back</button>
  )
}

export default GoBack