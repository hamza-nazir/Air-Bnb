'use server'
import { ImageUpload } from "./ImageUpload";
import Listing from "@/models/Listing";
import Reviews from "@/models/Reviews";
import connectedDb from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import Saved from "@/models/Saved";

export const ServerAction = async (formData) => {
   
   try{
      const currentuser=await getServerSession(authOptions);
         if (!currentuser) {
         throw new Error("Not authenticated");
       }

      await connectedDb();
   const {rates,name,type,description,street,city,country ,zipcode,beds,baths,square_feet,amenities,coords}=formData
   const listingInstance=new Listing({owner:currentuser.user.id,name,type,rates,description,beds,baths,square_feet,amenities,coords,location:{street,city,country,zipcode}})
   
    if(formData.images[0].size!=0){
       const images=await ImageUpload(formData.images);
      listingInstance.images=images
    }
   
   await listingInstance.save();
   return {success:true,listingInstance}
   }catch(err){
      return {success:false}
   }

};


export const reviewAction=async(formData)=>{
   try{
     const currentuser=await getServerSession(authOptions);
    await connectedDb();
     const {comment:comments,rating,listingId}=Object.fromEntries(formData.entries());
   
  const reviewInstance=new Reviews({comments,owner:currentuser.user.id,rating,listingId:listingId})
  await reviewInstance.save()
  revalidatePath(`/listing/${listingId}`)
  return {success:true}
   }catch(err){
    return { success: false, error: err.message };
   }
  
}



export const savedAction=async(data)=>{
const {sessionId,listingID}=data;
const savedExist=await Saved.findOne({listingID})
if(savedExist) return {message:"Already Exist"}
const savedInstance=new Saved({owner:sessionId,listingID});
await savedInstance.save();
return { success: true };
}

export const savedExist=async(data)=>{
const {listingID}=data;
const savedExist=await Saved.findOne({listingID})
if(savedExist)   return {success:true, message: 'exist' };
if(!savedExist)  return {success:false, message: 'not-exist' };
}

export const DelAction=async(data)=>{
const {sessionId,listingID}=data;
console.log(sessionId,listingID);
await Saved.findOneAndDelete({listingID})
return {success:true };
}

export const FilterAction=async(name)=>{
   

 let listings=  await Listing.find({name:{$regex:name,$options:'i'}})
   listings=JSON.stringify(listings);
   return listings
}




export async function filterListings(name, type, price, country) {


  const query = {
    ...(name&& { name: { $regex: name, $options: "i" } } ),
    ...(type!='all'? { type: { $regex: type, $options: "i" } }:{} ),
    ...(price&& { rates: { $lt: parseInt(price) } } ),
    ...( country&&{ "location.country": { $regex: country, $options: "i" } } ),
  };
 
  const listings = await Listing.find(query).lean();
  return JSON.stringify(listings);
}