import Reviews from '@/models/Reviews';
import Featured from '@/models/Featured';
import connectedDb from '@/lib/db';

export async function GET(req, { params }) {
  await connectedDb();
   const {id,page}=await params
  console.log(page)
  const skip=(page-1)*25
    const reviews = await Reviews.find({ listingId: id }).skip(skip).limit(25).populate('owner');
  return new Response(JSON.stringify(reviews));


}
