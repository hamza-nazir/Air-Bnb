import React from 'react'
import Saved from '@/models/Saved'
import Link from 'next/link'
import Image from 'next/image';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
const Bookmarks = async() => {
  const session=await getServerSession(authOptions);
  const listing=await Saved.find({owner:session?.user?.id}).populate('listingID')
console.log(listing[0].listingID._id)
  return (
    <div className="container my-4">
  <h2 className="fw-semibold mb-4">Saved Listings</h2>

  <div className="row g-4">
    {listing?.map((listing, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-sm-6">
        <div className="card h-100 shadow-sm border-0 rounded-3">
          <div className="position-relative" style={{ height: "200px" }}>
           <Link href={`/listing/${listing.listingID?._id}`} >
            <Image
              className="card-img-top rounded-top-3 object-cover"
              alt="img"
              src={listing?.listingID.images[0]}
              fill
              sizes="100%" />
            </Link>
          </div>

          <div className="card-body d-flex flex-column justify-content-between">
            <h6 className="card-title text-truncate mb-2">
              {listing?.listingID.name}
            </h6>

            <div className="mt-auto">
             
                
                  <div className="text-muted">
                    {listing?.listingID.rates} Rs / night
                  </div>
             

             
    
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Bookmarks