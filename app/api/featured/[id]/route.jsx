import Featured from "@/models/Featured";
import connectedDb from "@/lib/db";
import Reviews from "@/models/Reviews";

export async function POST(req, { params }) {
 
    const {id}=await params;
   let listing= await Featured.findOne({ListingID:id});

   if (listing) {
   return new Response({success:false});
   }

   if(!listing){
  const featureInstance=new Featured({ListingID:id})
   await featureInstance.save();
   return new Response({success:true});
   }


}

export async function GET(req, { params }) {

    await connectedDb(); 
    const { id } =await params;
   

    const exists = await Featured.exists({ ListingID: id });
     return new Response( JSON.stringify({ exists})) 
    

}


export async function DELETE(req, { params }) {

    await connectedDb(); 
    const { id } =await params;
const listing=   await Featured.findOneAndDelete({ ListingID: id });
if(listing){
  return new Response({success:true}) 
}else{
  console.log("ERROR")
   return new Response({success:false});
}
    

}
