'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const SeachBar = () => {
  const router=useRouter();
const submit=(formData)=>{
const name=formData.get('name');
router.push(`/listing?name=${name}`);
}

  return (
   <div className="container-fluid">
    <div className="row w-50 mx-auto searchContainer">
      <div className="col-12">
         <h1 className='text-center'>Where to?</h1>
      </div>
      <div className="col-12 text-center mt-4">
        <div className="row searchBarItems">
         <div className="col hover">Search All</div>
         <div className="col hover">Hotels</div>
         <div className="col hover">
        <Link className='text-dark text-decoration-none' href={'/listing/add'}>
        Add listing
        </Link>
         </div>

         <div className="col hover">Resturants</div>
         <div className="col hover">

          <Link className='text-dark text-decoration-none' href={'/bookmarks'}>
        Bookmarks
        </Link>
      </div>
         

        </div>
      </div>
      <form action={submit}>
    <div className="row mt-2">
      <div className="col-lg-8 col-md-8 col-sm-8">
        <input type="text" className='form-control' name='name' placeholder='Search for anything, hotel building etc...' />
      </div>
         <div className="col-lg-4 col-md-4 col-sm-4" ><button  className='btn btn-primary w-100'>Search</button></div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default SeachBar