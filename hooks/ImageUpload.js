'use server';
import cloudinary from "./Cloudinary";
export const ImageUpload=async(images)=>{
  try{
     const uploadedUrls = [];

  for (const image of images) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const base64 = buffer.toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:${image.type};base64,${base64}`, 
      { folder: "AirBnb" }
    );

    uploadedUrls.push(result.secure_url||[]);
  }
// console.log(uploadedUrls)
  return uploadedUrls;
  }catch(err){
   return "Error occur"
  }


}