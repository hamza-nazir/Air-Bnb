import Image from 'next/image'
import Featured from '@/models/Featured';
import Link from 'next/link';
const FeaturedListings = async () => {

  const randomFeatured = await (await Featured.aggregate([ { $sample: { size: 100 } }])).slice(0,4).sort(()=>Math.random()-Math.random())
const featuredListings = await Featured.populate(randomFeatured, { path: "ListingID" });
return (
  <div className="container my-4">
  <h2 className="fw-semibold mb-4">Featured Listings</h2>

  <div className="row g-4">
    {featuredListings?.map((listing, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-sm-6">
        <div className="card h-100 shadow-sm border-0 rounded-3">
       <div style={{ position: "relative", height: "200px", width: "100%" }}>
  <Link  href={`/listing/${listing.ListingID?._id}`}>
    <Image priority
      className="card-img-top rounded-top-3 object-cover"
      alt="img"
      src={
        listing?.ListingID?.images[0] ||
        "https://res.cloudinary.com/duthfpky2/image/upload/v1757589966/AirBnb/stmekcf7pvvdlwndkfxf.jpg"
      }
      fill
      sizes="100%"
      style={{ objectFit: "cover" }} 
    />
  </Link>
</div>



          <div className="card-body d-flex flex-column justify-content-between">
            <h6 className="card-title text-truncate mb-2">
              {listing?.ListingID?.name}
            </h6>

            <div className="mt-auto">
             
                
                  <div className="text-muted">
                    {listing?.ListingID?.rates} Rs / night
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

export default FeaturedListings