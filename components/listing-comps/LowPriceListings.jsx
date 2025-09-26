import Listing from "@/models/Listing"
import connectedDb from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
const LowPriceListings =async () => {
  await connectedDb()
const listings = await Listing.aggregate([{ $sample: { size: 100 } }]);

const sortedListings = listings.sort((a,b)=>(a.rates-b.rates)).sort(() => Math.random() - Math.random()).slice(0,8)
  return (


    <div className="container my-4">
    <h2 className="fw-semibold mb-4">Low Price Listings</h2>
  
    <div className="row g-4">
      {sortedListings?.map((listing, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
          <div className="card h-100 shadow-sm border-0 rounded-3">
            <div className="position-relative" style={{ height: "200px" }}>
             <Link href={`/listing/${listing?._id}`} style={{cursor:'pointer'}}>
              <Image
                className="card-img-top rounded-top-3 object-cover"
                alt="img"
                src={listing.images[0]}
                fill
                sizes="100%"
              />
              </Link>
            </div>
  
            <div className="card-body d-flex flex-column justify-content-between">
              <h6 className="card-title text-truncate mb-2">
                {listing.name}
              </h6>
  
              <div className="mt-auto">
                
                    <div className="text-muted">
                      {listing?.rates} Rs / night
               
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

export default LowPriceListings