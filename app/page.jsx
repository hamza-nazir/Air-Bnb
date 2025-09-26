import SeachBar from '@/components/search-comp/SeachBar'
import FeaturedListings from '@/components/listing-comps/FeaturedListings'
import LowPriceListings from '@/components/listing-comps/LowPriceListings'
import connectedDb from '@/lib/db'
const HomePage =async () => {
  await connectedDb();
  return (
   <>
        <SeachBar/>
        <FeaturedListings/>
        <LowPriceListings/>
    </>
  )
}

export default HomePage