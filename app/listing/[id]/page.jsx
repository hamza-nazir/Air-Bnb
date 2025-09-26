import Listing from "@/models/Listing";
import connectedDb from "@/lib/db";
import User from "@/models/User"; 
import Calender from '@/components/details-listing/Calender'
import MapDetails from "@/components/details-listing/MapDetails";
import GuestFavourite from "@/components/details-listing/GuestFavourite";
import ReviewsComp from "@/components/details-listing/Reviews";
import Hero from "@/components/details-listing/Hero";
import Aminities from "@/components/details-listing/Aminities";

const DetailsPage =async ({params}) => {
  const {id}=await params;
  await connectedDb()

const indivListing = await Listing.findById(id)
.populate('owner');

const ListingID=indivListing._id.toString();

await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  },1000)
})

  return (
<div className="container">
<Hero indivListing={indivListing}/>
<GuestFavourite indivListing={indivListing}/>
<hr className="mt-5" />
{/* <Calender/> */}
<MapDetails  coords={indivListing.coords}/>
<ReviewsComp listingId={ListingID} />
<Aminities amenities={indivListing.amenities}/>

</div>


  )
}

export default DetailsPage